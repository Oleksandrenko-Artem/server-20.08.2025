const createError = require('http-errors');
const Homework = require("../models/Homework");

// CRUD - create, read, update, delete

module.exports.countHomeworks = async (req, res, next) => {
    try {
        const count = await Homework.countDocuments(req.filter);
        res.status(200).send({ data: count });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.createHomework = async (req, res, next) => {
    try {
        const newHomework = await Homework.create(req.body);
        res.status(201).send({ data: newHomework });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.findAllHomeworks = async (req, res, next) => {
    try {
        const { limit, skip } = req.pagination;
        const homeworks = await Homework.find(req.filter).skip(skip).limit(limit);
        res.status(200).send({ data: homeworks });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.findHomeworkById = async (req, res, next) => {
    try {
        const homework = await Homework.findById(req.params.idHomework);
        if (!homework) {
            return next(createError(404, 'Homework not found'));
        }
        res.status(200).send({ data: homework });
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.updateHomeworkById = async (req, res, next) => {
    try {
        const updatedHomework = await Homework.findByIdAndUpdate(req.params.idHomework, req.body, { new: true });
        if (!updatedHomework) {
            return next(createError(404, 'Homework not found'));
        }
        res.status(200).send({data: updatedHomework});
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports.deleteHomeworkById = async (req, res, next) => {
    try {
        const deletedHomework = await Homework.findByIdAndDelete(req.params.idHomework);
        if (!deletedHomework) {
            return next(createError(404, 'Homework not found'));
        }
        res.status(200).send({ data: deletedHomework });
    } catch (error) {
        next(createError(400, error.message));
    }
};