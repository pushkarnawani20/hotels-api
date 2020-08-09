const hotelSearchTransformer = (data) => {
  let serachHotels =
    data &&
    data.length &&
    data.map((hotel) => {
      return {
        propCode: hotel.propCode,
        hotelName: hotel.hotelName,
        hotelCountry: hotel.hotelCountry,
        hotelCity: hotel.hotelCity,
        hotelImage: hotel.hotelImage,
        rating: hotel.rating,
        openingHours: hotel.openingHours,
      };
    });
  return serachHotels;
};

module.exports = { hotelSearchTransformer };
