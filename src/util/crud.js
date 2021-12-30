import { check } from "express-validator";

export const checkExisting = model => async (field, value) => {
    try {
        const doc = await model.findOne({ field: value }).exec();
        if (doc) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
}

export const getOne = model => async (req, res) => {
    try {
        const doc = await model.findOne({ _id: req.params.id }).exec();
        if (!doc) {
            return res.status(404).end();
        }
        return res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const getMany = model => async (req, res) => {

}

export const getAll = model => async (req, res) => {
    try {
        const doc = await model.find({}).exec();
        if (!doc) {
            return res.status(404).end();
        }
        return res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}



export const createOne = model => async (req) => {
    try {
        const doc = await model.create(req);
        console.log(doc);
        return doc;
    } catch (e) {
        console.error(e);
    }
}


export const updateOne = model => async (req, res) => {
    try {
        const doc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        if (!doc) {
            res.status(400).end();
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}


export const removeOne = model => async (req, res) => {
    try {
        const doc = await model.findOneAndRemove({ _id: req.params.id }).exec();
        if (!doc) {
            res.status(400).end();
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const crudControllers = model => ({
    checkExisting: checkExisting(model),
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    getAll: getAll(model),
    createOne: createOne(model)
})