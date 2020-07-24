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
      };
    });
  return serachHotels;
};

module.exports = { hotelSearchTransformer };
