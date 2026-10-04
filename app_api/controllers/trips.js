const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const triplist = async (req, res) => {
    const q = await Model
        .find({})
        .exec();

        //console.log(q);

    if(!q) {
        return res.status(404).json({ message: 'No trips found' });
    } else {
        res.status(200).json(q);
    }
};

module.exports = {
    triplist
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

        //console.log(q);

    if(!q) {
        return res.status(404).json({ message: 'Trip not found' });
    } else {
        res.status(200).json(q);
    }
};

module.exports = {
    triplist,
    tripsFindByCode

}