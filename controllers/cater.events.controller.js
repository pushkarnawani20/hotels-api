const EventsModel = require('../model/events.model');
const Hotel = require("../model/hotels.model"); 

const eventServiceBook = async (req, res) => {
    const input = req.body;
    try{
        const hotelExists = Hotel.findOne({
            propCode: input.propCode
        });
    
        if(hotelExists) {
            const bookQuery = new EventsModel(
                {...input}
            );
           await bookQuery.save();
           res.status(200).json({
               data:bookQuery,
               msg: 'Event query submitted successfully'
           })
        } else {
            res.status(200).json({
                data:null,
                msg: 'Hotel does not exist'
            });
        }
    } catch(err){
        return res.status(500).json({
            data: null,
            message: "Internal server error !" + err,
          });
    }
};

module.exports = {eventServiceBook} ;
