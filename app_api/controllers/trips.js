const Model = require('../models/travlr');

const tripsList = async (req, res) => {
  const q = await Model.find({}).exec();
  if (!q) {
    return res.status(404).json({ message: 'No trips found' });
  }
  return res.status(200).json(q);
};

const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }).exec();
  if (!q) {
    return res.status(404).json({ message: 'Trip not found' });
  }
  return res.status(200).json(q);
};

const tripsAddTrip = async (req, res) => {
  const newTrip = new Model({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });
  const q = await newTrip.save();
  if (!q) {
    return res.status(400).json({ message: 'Trip could not be added' });
  }
  return res.status(201).json(q);
};

const tripsUpdateTrip = async (req, res) => {
  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    }
  ).exec();
  if (!q) {
    return res.status(400).json({ message: 'Trip could not be updated' });
  }
  return res.status(201).json(q);
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};