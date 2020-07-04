import Meal from "../../model/hotels/meals";
import Restaurant from "../../model/hotels/restaurants";

/**
 * @method - post
 * @description - create Restaurant
 */

const createResturent = async (req, res) => {
  const input = req.body;
  // prepare new Restaurant model
  const restaurant = new Restaurant({ ...input, meals: [] });

  try {
    // check for Restaurant exists or note if exist then check for meal
    let hasRestaurant = await Restaurant.findOne({
      name: input.name,
    });
    // if Restaurant exists
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
    // check for Restaurant exists or note if exist then check for meal
    let restaurant = await Restaurant.findOne({
      name: restaurantInput.name,
    });
    // if Restaurant exists
    if (restaurant) {
      // check for meail exists or not by input request
      let meals = await Meal.findOne({ _id: restaurantInput.inputMealId });
      // if meal not found return error
      if (!meals) {
        return res.status(400).json({
          data: null,
          message: "Entered meal not exists in meals table !",
        });
      }
      // if meal exist check for dublicate meal by meal id Note: only single meal
      let match = restaurant.meals.find((e) =>
        e.equals(restaurantInput.inputMealId)
      );
      // if match not found push meal in existing restaurant
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
    let restaurant = await Restaurant.find()
      .populate("meals")
      .lean()
      .exec();
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

export { createResturent, addMealsInResturent, listResturents };
