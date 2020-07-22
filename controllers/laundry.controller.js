const Laundry = require("../model/laundry.model");

const addLaundry = async (req, resp) => {
  const inputData = req && req.body;
  const laundryModel = new Laundry({ ...inputData });

  try {
    let dataExist = await Laundry.findOne({ name: inputData.name });
    if (!dataExist) {
      await laundryModel.save();
      resp.status(200).json({
        data: laundryModel,
        msg: "Laundry item added",
      });
    } else {
      resp.status(400).json({
        data: [],
        msg: "Laundry item exists",
      });
    }
  } catch (err) {
    resp.status(500).json({
      data: null,
      message: `Internal server error: ${err} !`,
    });
  }
};

const listLaundry = async (req, resp) => {
  try {
    const laundryData = await Laundry.find();
    laundryData &&
      resp.status(200).json({
        data: laundryData,
      });
  } catch (err) {
    resp.status(500).json({
      data: null,
      message: `Internal server error: ${err} !`,
    });
  }
};

module.exports = { listLaundry, addLaundry };
