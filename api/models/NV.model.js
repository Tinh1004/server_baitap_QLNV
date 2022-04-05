const mongoose = require('mongoose');

const NVSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: Number,
            enum: [0, 1]
        },
        pb_id: {
            type: mongoose.Schema.ObjectId,
            required: true,
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('NV', NVSchema);
