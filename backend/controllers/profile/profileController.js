let { PostsModel } = require('../../models');

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
        let pageSize = 20;
        let page = (req.query.page && req.query.page >= 1) ? req.query.page : 1;

        let offset = (page * pageSize) - pageSize;
        let limit = pageSize;

        let posts = await PostsModel.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: ['id', 'title', 'slug', 'createdAt', 'category_id'],
            where: whereStatement
        });
        const totalPages = Math.ceil(posts.count / limit);
        let responseData = {
            totalItems: posts.count,
            data: posts.rows,
            currentPage: page,
            totalPages: totalPages

        };
        return res.json(responseData);



    } catch (err) {

        next(err);


    }



}