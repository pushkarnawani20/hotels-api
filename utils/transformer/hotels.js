const hotelSearchTransformer = (data) => {
  let serachHotels =
    data &&
    data.length &&
    data.map((hotel) => {
      return {
        propCode: hotel.propCode,
        hotelName: hotel.hotelName,
        hotelLocation: hotel.hotelLocation,
        hotelImage: hotel.hotelImage,
      };
    });
  return serachHotels;
};

module.exports = { hotelSearchTransformer };
