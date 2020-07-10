const Spa = require("../model/spa.model");

const createSpa = async (req, res) => {
  const input = req.body;
  const spa = new Spa({ ...input });

  try {
    let hasSpa = await Spa.findOne({
      name: input.name,
    });
    if (!hasSpa) {
      await spa.save();
      res.status(200).json({
        data: spa,
        message: "Spa added sucessfully !",
      });
    } else {
      res.status(400).json({
        data: [],
        message: "Spa already exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const listSpa = async (req, res) => {
  try {
    let spa = await Spa.find();
    res.status(200).json({
      data: spa,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !",
    });
  }
};

module.exports = { createSpa, listSpa };
