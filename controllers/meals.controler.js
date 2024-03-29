const Meal = require("../model/meals.model");

const createMeal = async (req, res) => {
  const inputMeal = req.body;
  try {
    let mealObj = new Meal({ ...inputMeal });
    await mealObj.save();
    res.status(200).json({
      data: mealObj,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Error in Saving Meal !" + err,
    });
  }
};

const listMeal = async (req, res) => {
  try {
    let meals = await Meal.find();
    if (!meals) {
      return res.status(400).json({
        data: null,
        message: "No Meal found !",
      });
    } else {
      return res.status(200).json({
        data: meals,
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "internal server error",
    });
  }
};

module.exports = { createMeal, listMeal };
