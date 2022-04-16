let { ContactUsModel } = require('../models');

exports.save = async function (req, res, next) {

    try {

        const contactUs = await ContactUsModel.create( req.body, { fields: ['name','email','message'] });
        return res.json(contactUs);

    } catch (err) {

        next(err);
    }



}