const NV = require('../models/NV.model');
const mongoose = require('mongoose');


const NVController = {
    createNV: async (req, res) => {
        const newNV = new NV(req.body);
        try {
            const savedNV = await newNV.save();
            res.status(200).json({ savedNV });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getNVs: async (req, res) => {
        try {
            const products = await NV.find();
            return res.status(200).json(products);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    getNVbyId: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await NV.findById(id);
            return res.status(200).json(product);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    updateNVById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await NV.findById(id);
            const newProduct = await product.updateOne({ $set: req.body });
            res.status(200).json(newProduct);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteNVById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await NV.findById(id);
            await product.deleteOne();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = NVController;