const mongoose = require('mongoose');

const PBSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('PB', PBSchema);
