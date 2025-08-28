const User = require('../models/User');

module.exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({ data: newUser });
    } catch (error) {
        console.log(error);
    }
}