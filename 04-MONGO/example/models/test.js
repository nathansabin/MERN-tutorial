const { Schema, model } = require("mongoose");

const testSchema = new Schema({
    field: {
        type: String,
        required: true,      
    },
    data : {
        type: String,
        required: true
    }
});

const Test = model("Test", testSchema);

module.exports = Test;