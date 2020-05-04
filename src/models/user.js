const Joi = require('@hapi/joi');

let User = Joi.object({
    age: Joi.number().positive().allow(0).required(),
    dependents: Joi.number().positive().allow(0).required(),
    house: Joi.object().keys({ ownership_status: Joi.string().valid('owned', 'mortgaged').required() }).allow(0).required(),
    income: Joi.number().positive().allow(0).required(),
    marital_status: Joi.string().valid('single', 'married').required(),
    risk_questions: Joi.array().items(Joi.number().min(0).max(1).required()).min(3).max(3).required(),
    vehicle: Joi.object().keys({ year: Joi.number().positive().required() }).allow(0).required()
});

module.exports = User;