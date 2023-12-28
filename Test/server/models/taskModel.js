const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide tile"],
        maxLength: [50, "Name should be under 50 character"],
    },
    description: {
        type: String,
        required: [true, "Please provide description"],
    },
    priority: {
        type: String,
        enum: ['Type1', 'Type2', 'Type3'],
        required: [true, "Please provide priority"],
    },
    category: {
        type: String,
        enum: ['Type1', 'Type2', 'Type3'],
        required: [true, "Please provide category"],
    },
    status: {
        type: String,
        enum: ['Type1', 'Type2', 'Type3'],
        required: [true, "Please provide status"],
    },
    documentname: {
        type: String,
        required: [true, "Please provide filename"],
    },
    documenturl: {
        type: String,
        required: [true, "Please provide fileurl"],
    },
    collaborators: [{
        _id: {
            type: Schema.Types.ObjectId, // You can use String or Schema.Types.ObjectId, depending on your needs
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please provide name"],
            maxLength: [20, "Name should be under 20 character"],
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
        },
    }],
    updatedBy: [{
        _id: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please provide name"],
            maxLength: [20, "Name should be under 20 character"],
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Task", taskSchema);