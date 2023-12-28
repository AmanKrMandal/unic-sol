const Task = require("../models/taskModel");

const createTask = async (req, res, next) => {
    try {
        const { title, description, priority, category, status, collaborators } = req.body;
        const details = req.details;

        if (!req.file) {
            return res.status(400).json({ message: "File not selected", data: null });
        }

        var fullUrl = req.protocol + "://" + req.get("host");
        const { originalname, path } = req.file;

        await Task.create({
            title,
            description,
            priority,
            category,
            collaborators,
            status,
            documentname: originalname,
            documenturl: fullUrl + "/" + path,
            createdBy: details._id
        });

        return res.status(200).json({ message: "Task created successfully", data: null });
    } catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const details = req.details;

        const result = await Task.deleteOne({
            _id: id,
            createdBy: details._id,
        });
        if (result.deletedCount === 1) {
            return res.status(200).json({ message: 'Task deleted successfully', data: null });
        } else {
            return res.status(404).json({ message: 'Task not found for deleting', data: null });
        }
    } catch (error) {
        next(error);
    }
}

const getAllTask = async (req, res, next) => {
    try {
        const task = await Task.find();
        return res.status(200).json({ data: task, message: null });
    } catch (error) {
        next(error);
    }
}

const getTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found', data: null });
        }
        return res.status(200).json({ data: task, message: null });
    } catch (error) {
        next(error);
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, description } = req.body
        const { _id, email, name } = req.details
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    title,
                    description,
                },
            },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found', data: null });
        }

        const updatedByUser = {
            _id,
            name,
            email
        };

        updatedTask.updatedBy = [updatedByUser, ...updatedTask.updatedBy];

        await updatedTask.save();

        return res.status(200).json({ data: null, message: "Task updated" });
    } catch (error) {
        next(error);
    }
}

module.exports = { createTask, deleteTask, getAllTask, getTask, updateTask }