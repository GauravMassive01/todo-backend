import Joi from "joi";

const userPostSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required()

});



const userPostValidation = (req, res, next) => {
    const { error } = userPostSchema.validate(req?.body);

    if (error) {
        return res.status(400).send({message: error.details[0].message});
    }

    next();
};

export {userPostValidation}



