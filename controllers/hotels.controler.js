const Hotel = require("../model/hotels.model");
const Restaurant = require("../model/restaurants.model");
const Spa = require("../model/spa.model");
const Chef = require("../model/chef.model");
const Laundry = require("../model/laundry.model");
const { hotelSearchTransformer } = require("../utils/transformer/hotels");

const createHotel = async (req, res) => {
  const requestParam = req.body;
  const hotel = new Hotel({
    ...requestParam,
    restaurants: [],
    spa: [],
    chefs: [],
    laundry: []
  });
  try {
    let hasHotel = await Hotel.findOne({
      propCode: requestParam.propCode,
    });
    if (!hasHotel) {
      await hotel.save();
      res.status(200).json({
        data: hotel,
        message: "Hotel added sucessfully !",
      });
    } else {
      res.status(400).json({
        data: [],
        message: "Hotel already exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const addRestaurantInHotel = async (req, res) => {
  const requestParam = req.body;
  try {
    let hotel = await Hotel.findOne({
      propCode: requestParam.propCode,
    });
    if (hotel) {
      let restaurant = await Restaurant.findOne({
        _id: requestParam.restaurantId,
      });

      if (!restaurant) {
        return res.status(400).json({
          data: null,
          message: "restaurantId not exists!",
        });
      }
      let match = hotel.restaurants.find((e) =>
        e.equals(requestParam.restaurantId)
      );
      if (!match) {
        hotel.restaurants.push(requestParam.restaurantId);
        await hotel.save();
        res.status(200).json({
          data: hotel,
          message: "restaurant added sucessfully !",
        });
      } else {
        res.status(400).json({
          data: null,
          message: "restaurant already exist in this hotel !",
        });
      }
    } else {
      res.status(200).json({
        data: [],
        message: "Hotel not exist !",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const getHotelsById = async (req, res) => {
  try {
    let hotels = await Hotel.findOne({
      propCode: req.params.propCode,
    })
      .populate({
        path: "restaurants",
        model: "Restaurant",
        populate: {
          path: "meals",
          model: "Meal",
        },
      })
      .populate({
        path: "spa",
        model: "Spa",
      })
      .populate({
        path: "chefs",
        model: "Chef",
      })
      .populate({
        path: "laundry",
        model: "Laundry",
      })
      .lean()
      .exec();
    if (hotels) {
      res.status(200).json({
        data: hotels,
      });
    } else {
      res.status(400).json({
        data: [],
        message: "not exist",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const searchHotels = async (req, res) => {
  console.log("hit me");
  try {
    let hotels = await Hotel.find();
    if (hotels) {
      var serachResult = hotelSearchTransformer(hotels);
      res.status(200).json({
        data: serachResult,
      });
    } else {
      res.status(400).json({
        data: [],
        message: "hotels not exist",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const addSpaInHotel = async (req, res) => {
  const requestParam = req.body;
  try {
    let hotel = await Hotel.findOne({
      propCode: requestParam.propCode,
    });
    if (hotel) {
      let spa = await Spa.findOne({
        _id: requestParam.spaId,
      });

      if (!spa) {
        return res.status(400).json({
          data: null,
          message: "Spa Id does not exist!",
        });
      }
      let match = hotel.spa.find((e) => e.equals(requestParam.spaId));
      if (!match) {
        hotel.spa.push(requestParam.spaId);
        await hotel.save();
        res.status(200).json({
          data: hotel,
          message: "Spa item added sucessfully !",
        });
      } else {
        res.status(400).json({
          data: null,
          message: "Spa item already exists in this hotel !",
        });
      }
    } else {
      res.status(200).json({
        data: [],
        message: "Hotel not exist !",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const addChefInHotel = async (req, res) => {
  const requestParam = req.body;
  try {
    let hotel = await Hotel.findOne({
      propCode: requestParam.propCode,
    });
    if (hotel) {
      let chef = await Chef.findOne({
        _id: requestParam.chefId,
      });

      if (!chef) {
        return res.status(400).json({
          data: null,
          message: "chef id does not exists!",
        });
      }
      let match = hotel.chefs.find((e) => e.equals(requestParam.chefId));
      if (!match) {
        hotel.chefs.push(requestParam.chefId);
        await hotel.save();
        res.status(200).json({
          data: hotel,
          message: "chefs added sucessfully !",
        });
      } else {
        res.status(400).json({
          data: null,
          message: "chefs already exist in this hotel !",
        });
      }
    } else {
      res.status(200).json({
        data: [],
        message: "Hotel not exist !",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

const addLaundryInHotel = async (req, res) => {
  const input = req.body;
  try{
    let hotel = await Hotel.findOne({
      propCode: input.propCode
    });
    
    if(hotel){

      const laundryItem = Laundry.findOne({
        _id: input.laundryId
      })

      if(!laundryItem){
        return res.status(400).json({
          data: null,
          message: "laundry id does not exist!",
        });
      }

      let laundryExists = hotel.laundry.find(e => e.equals(input.laundryId));
      if(!laundryExists){
        hotel.laundry.push(input.laundryId);
        await hotel.save();
        res.status(200).json({
          data: hotel,
          message : "Laundry item added successfully in hotel"
        })

      } else {
         res.status(400).json({
          data: null,
          message: "laundry id already exists in hotel!",
        });
      }

    } else {
      return res.status(200).json({
        data: [],
        message: "Hotel does not exist!",
      });
    }


  } catch(err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
}

module.exports = {
  createHotel,
  addRestaurantInHotel,
  getHotelsById,
  searchHotels,
  addSpaInHotel,
  addChefInHotel,
  addLaundryInHotel
};
