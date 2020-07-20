const Chef = require("../model/chef.model");

const createChef = async (req, res) => {
  const inputRequest = req.body;
  const chef = new Chef({ ...inputRequest });

  try {
    let hasChef = await Chef.findOne({
      name: inputRequest.name,
    });
    if (!hasChef) {
      await chef.save();
      res.status(200).json({
        data: chef,
        message: "Chef added sucessfully !",
      });
    } else {
      res.status(400).json({
        data: [],
        message: "Chef already exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const listChef = async (req, res) => {
  try {
    let chef = await Chef.find();
    res.status(200).json({
      data: chef,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !",
    });
  }
};

module.exports = { createChef, listChef };
