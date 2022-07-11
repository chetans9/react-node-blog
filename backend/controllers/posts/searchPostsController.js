let models = require('../../models');
let postsModel = models.PostsModel;
const Joi = require('joi');
const { Op } = require('sequelize');

exports.index = async function (req, res, next) {
    try {


        let {query} =  req;

        let whereStatement = {};

        if(query.str){
            whereStatement = { title : {[Op.like]: '%' + query.str + '%'} };
            
        }
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