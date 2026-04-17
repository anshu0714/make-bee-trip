const flights = require("./data/flights.data");
const buses = require("./data/buses.data");
const trains = require("./data/trains.data");
const hotels = require("./data/hotels.data");

const services = {
  flight: flights,
  bus: buses,
  train: trains,
  hotel: hotels,
};

function getTravelData(type) {
  return services[type] || null;
}

module.exports = { getTravelData };
