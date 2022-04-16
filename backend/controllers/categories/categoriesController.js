let { CategoriesModel } = require('../../models');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.index = async function (req, res, next) {

    try {

       // console.log(categoriesModel);

        let categories = await CategoriesModel.findAll({ limit : 50});

        return res.json(categories);

    } catch (err) {


        next(err);
    }



}