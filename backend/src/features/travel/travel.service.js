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

// COMMON FILTERS

function applyCommonFilters(data, query, type) {
  let result = [...data];

  const { from, to, city, keyword, minPrice, maxPrice, sort } = query;

  // LOCATION FILTER
  if (type === "hotel") {
    if (city) {
      result = result.filter((item) =>
        item.city.toLowerCase().includes(city.toLowerCase()),
      );
    }
  } else {
    if (from) {
      result = result.filter((item) =>
        item.from.toLowerCase().includes(from.toLowerCase()),
      );
    }

    if (to) {
      result = result.filter((item) =>
        item.to.toLowerCase().includes(to.toLowerCase()),
      );
    }
  }

  // KEYWORD SEARCH
  if (keyword) {
    const key = keyword.toLowerCase();

    result = result.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(key),
      ),
    );
  }

  // PRICE FILTER
  if (minPrice) {
    result = result.filter((item) => {
      const price = item.price || item.pricePerNight;
      return price >= Number(minPrice);
    });
  }

  if (maxPrice) {
    result = result.filter((item) => {
      const price = item.price || item.pricePerNight;
      return price <= Number(maxPrice);
    });
  }

  // RATING (HOTELS)
  if (query.rating && type === "hotel") {
    result = result.filter((item) => item.rating >= Number(query.rating));
  }

  // SORTING
  if (sort) {
    const [field, order] = sort.split("_");

    result.sort((a, b) => {
      const valA = a[field] || a.price || a.pricePerNight;
      const valB = b[field] || b.price || b.pricePerNight;

      if (order === "asc") return valA - valB;
      return valB - valA;
    });
  }

  return result;
}

// MAIN FUNCTION

function getTravelData(type, query) {
  const data = services[type];

  if (!data) return null;

  return applyCommonFilters(data, query, type);
}

module.exports = { getTravelData };
