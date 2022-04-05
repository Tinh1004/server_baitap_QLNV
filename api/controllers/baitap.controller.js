const NV = require('../models/NV.model');
const PB = require('../models/PB.model');
const mongoose = require('mongoose');


const BaiTapController = {
    baitap1: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": null,
                        "min": { "$min": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap2: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": null,
                        "max": { "$max": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap3: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": "$pb_id",
                        "sum": { "$sum": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap4: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": "$pb_id",
                        "avg": { "$avg": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap5: async (req, res) => {
        try {
            const minAgeNV = await NV.find().sort("-name");

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap6: async (req, res) => {
        try {
            const query = [
                {
                    $sort: { age: -1 }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap7: async (req, res) => {
        try {
            const query = [
                { "$group": { _id: "$pb_id", count: { $sum: 1 } } }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap8: async (req, res) => {
        try {
            const query = [
                {
                    $match: {
                        gender: 0
                    }
                },
                { "$group": { _id: "$pb_id", count: { $sum: 1 } } }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap9: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": "$gender",
                        "max": { "$max": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap10: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": "$gender",
                        "min": { "$min": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap11: async (req, res) => {
        try {
            const query = [
                {
                    "$group": {
                        "_id": "$gender",
                        "avg": { "$avg": "$age" }
                    }
                }
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    baitap12: async (req, res) => {
        try {
            const query = [
                {
                    $lookup: {
                        from: "pbs",
                        localField: "pb_id",
                        foreignField: "_id",
                        as: "PBs",
                        pipeline: [
                            {
                              $match: {
                                name: "PB001"
                              }
                            }
                          ]
                    }   
                },
                {   $unwind:"$PBs" },
            ];

            const minAgeNV = await NV.aggregate(query);

            return res.status(200).json(minAgeNV);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = BaiTapController;