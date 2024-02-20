import Joi from "joi";

const todoCreateSchema = Joi.object({
    content: Joi.string().max(200).required(),
    UserId: Joi.number().required()
});

const todoCreateValidation = (req, res, next) => {
    console.log(req?.body)
    const { error } = todoCreateSchema.validate(req?.body);

    if (error) {
        return res.status(400).send({message: error.details[0].message});
    }

    next();
};

export {todoCreateValidation}