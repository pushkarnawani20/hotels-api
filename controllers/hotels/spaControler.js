const Spa = require("../../model/hotels/spa");

/**
 * @method - post
 * @description - create Restaurant
 */

const createSpa = async (req, res) => {
  const input = req.body;
  // prepare new Restaurant model
  const spa = new Spa({ ...input, meals: [] });

  try {
    // check for Spa exists or note if exist then check for Spa
    let hasSpa = await Spa.findOne({
      name: input.name,
    });
    // if Spa exists
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
