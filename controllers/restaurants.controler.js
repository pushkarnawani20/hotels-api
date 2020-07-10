const Meal = require("../model/meals.model");
const Restaurant = require("../model/restaurants.model");

const createResturent = async (req, res) => {
  const input = req.body;
  const restaurant = new Restaurant({ ...input, meals: [] });

  try {
    let hasRestaurant = await Restaurant.findOne({
      name: input.name,
    });
    if (!hasRestaurant) {
      await restaurant.save();
      res.status(200).json({
        data: restaurant,
        message: "Restaurant added sucessfully !",
      });
    } else {
      res.status(400).json({
        data: [],
        message: "Restaurant already exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const addMealsInResturent = async (req, res) => {
  const restaurantInput = req.body;
  try {
    let restaurant = await Restaurant.findOne({
      name: restaurantInput.name,
    });
    if (restaurant) {
      let meals = await Meal.findOne({ _id: restaurantInput.inputMealId });
      if (!meals) {
        return res.status(400).json({
          data: null,
          message: "Entered meal not exists in meals table !",
        });
      }
      let match = restaurant.meals.find((e) =>
        e.equals(restaurantInput.inputMealId)
      );
      if (!match) {
        restaurant.meals.push(restaurantInput.inputMealId);
        await restaurant.save();
        res.status(200).json({
          data: restaurant,
          message: "Meal sucessfully added on input restaurant !",
        });
      } else {
        res.status(400).json({
          data: null,
          message: "Meal already exist in this restaurant !",
        });
      }
    } else {
      res.status(200).json({
        data: [],
        message: "Restaurant not exist !",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const listResturents = async (req, res) => {
  try {
    let restaurant = await Restaurant.find().populate("meals").lean().exec();
    res.status(200).json({
      data: restaurant,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !",
    });
  }
};

module.exports = { createResturent, addMealsInResturent, listResturents };
