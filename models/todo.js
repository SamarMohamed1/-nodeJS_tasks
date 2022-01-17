const mongoose = require("mongoose");
const Joi = require("joi");

const todoSchema = new mongoose.Schema({
    value: {
        type: String,
        min: 3,
        max: 50,
        required: true,
    }
});

const Todo = mongoose.model("Todo", todoSchema);

const validationSchema = Joi.object({
    value: Joi.string().min(3).max(50).required(),
});

const validateTodo = (todo) => {
    return validationSchema.validate(todo)
}

module.exports = { Todo, validateTodo };
