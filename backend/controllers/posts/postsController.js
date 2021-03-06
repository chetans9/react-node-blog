let models = require('../../models');
let postsModel = models.PostsModel;
const Joi = require('joi');
let { formErrors } = require('../../util/validationErrors');
let categoriesModel = models.CategoriesModel;
let fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.index = async function (req, res, next) {
    try {

        let whereStatement = {};
        let pageSize = 10;
        let page = (req.query.page && req.query.page >= 1) ? req.query.page : 1;

        let offset = (page * pageSize) - pageSize;
        let limit = pageSize;

        let posts = await postsModel.findAndCountAll({
            limit: limit,
            offset: offset,
            // attributes: ['id','title','slug','createdAt','category_id'],
            where: whereStatement
        });
        const totalPages = Math.ceil(posts.count / limit);
        // let postsData= posts.rows.map((element) => {


        //     let thumb_image = req.hostUrl + "/images/"  + 'thumb_'+ element.post_image;
        //     return { ...element, thumb_image : thumb_image  }
        // });    
        let responseData = {
            totalItems: posts.count,
            data: posts.rows,
            currentPage: page,
            totalPages: totalPages

        };
        return res.json(responseData);

    } catch (error) {

        next(error);

    }



}


exports.postsByCategory = async function (req, res, next) {

    let whereStatement = {};
    let pageSize = 20;
    let page = (req.query.page && req.query.page >= 1) ? req.query.page : 1;

    let offset = (page * pageSize) - pageSize;
    let limit = pageSize;

    let posts = await postsModel.findAndCountAll({
        limit: limit,
        offset: offset,
        include: [{
            model: categoriesModel,
            as: 'category',
            where: {
                title: req.params.title
            }
        }],
        // attributes: ['id','title','slug','createdAt','category_id'],
        where: whereStatement,
    });


    const totalPages = Math.ceil(posts.count / limit);
    let responseData = {
        totalItems: posts.count,
        data: posts.rows,
        currentPage: page,
        totalPages: totalPages

    };
    return res.json(responseData);





}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.postDetail = async function (req, res, next) {

    try {

        let post = await postsModel.findOne({
            where: {
                id: req.params.id,
                slug: req.params.slug
            },
            include: [{
                model: categoriesModel,
                as: 'category',

            }]
        });

        post.post_image = req.hostUrl + "/images/" + post.post_image;

        return res.json(post);

    } catch (err) {

        return next(err);


    }


}


exports.createPost = async function (req, res, next) {

    try {

        const schema = Joi.object(
            {
                title: Joi.string().min(3).max(190).required(),
                description: Joi.string().min(5).required(),
                category_id: Joi.number().required(),
                post_image: Joi.any().optional()


            }

        );

        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const { details } = error;

            let errorObj = formErrors(details);
            return res.status(422).json(errorObj);
        }

        let save_data = { ...req.body };
        save_data.slug = convertToSlug(save_data.title);
        save_data.user_id = req.user.id;

        let post = await postsModel.create(save_data, { fields: ['title', 'description', 'category_id', 'slug', 'user_id'] });

        //Move uploaded image 

        // console.log("Image ",req.file);
        if (req.file) {

            let ext = path.extname(req.file.originalname);
            fs.renameSync(req.file.path, 'public/images/' + req.file.filename + ext);
            post.post_image = req.file.filename + ext;
            await post.save();

            sharp('public/images/' + req.file.filename + ext).resize(600, 600, { fit: 'inside' })
                .toFile('public/images/' + 'thumb_' + req.file.filename + ext, function (err) {

                    console.log(err);
                });



        }


        return res.json(post);

    } catch (err) {

        return next(err);


    }


}

exports.editDetails = async function (req, res, next) {


    try {



        let post = await postsModel.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: categoriesModel,
                as: 'category',

            }]
        });

        return res.json(post);

    } catch (err) {

        return next(err);


    }




}


exports.updatePost = async function (req, res, next) {

    try {



        const schema = Joi.object(
            {
                title: Joi.string().min(3).max(190).required(),
                description: Joi.string().min(5).required(),
                category_id: Joi.number().required(),
                post_image: Joi.any().optional()


            }

        );

        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const { details } = error;

            let errorObj = formErrors(details);
            return res.status(422).json(errorObj);
        }


        let id = req.params.id;

        let save_data = { ...req.body };
        save_data.slug = convertToSlug(save_data.title);

        // console.log(req.user.id);

        let post = await postsModel.findOne({
            where: {
                id: id
            }
        });


        post = await post.update(save_data, { fields: ['title', 'description', 'category_id', 'slug'] });

        if (req.file) {

            let ext = path.extname(req.file.originalname);
            fs.renameSync(req.file.path, 'public/images/' + req.file.filename + ext);
            post.post_image = req.file.filename + ext;
            await post.save();

            sharp('public/images/' + req.file.filename + ext).resize(600, 600, { fit: 'inside' })
                .toFile('public/images/' + 'thumb_' + req.file.filename + ext, function (err) {

                    console.log(err);
                });


        }


        return res.json(post);

    } catch (err) {

        return next(err);


    }


}



exports.deletePost = async function (req, res, next) {

    try {

        let post = await postsModel.findOne({
            where: { slug: req.params.slug },
            include: [{
                model: categoriesModel,
                as: 'category',

            }]
        });

        return res.json(post);

    } catch (err) {

        return next(err);


    }


}


function convertToSlug(Text) {
    return Text.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}
