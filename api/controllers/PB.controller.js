const PB = require('../models/PB.model');
const mongoose = require('mongoose');


const PBController = {
    createPB: async (req, res) => {
        const newPB = new PB(req.body);
        try {
            const savedPB = await newPB.save();
            res.status(200).json({ savedPB });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getPBs: async (req, res) => {
        try {
            const products = await PB.find().sort("name");
            return res.status(200).json(products);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    getPBbyId: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await PB.findById(id);
            return res.status(200).json(product);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    updatePBById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await PB.findById(id);
            const newProduct = await product.updateOne({ $set: req.body });
            res.status(200).json(newProduct);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    deletePBById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await PB.findById(id);
            await product.deleteOne();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = PBController;