const HotelCard = ({ item }) => {
  return (
    <div className="travel-card hotel">

      <div className="left">
        <h3>{item.name}</h3>
        <p className="brand">{item.city}</p>
        <p>⭐ {item.rating}</p>
      </div>

      <div className="right">
        <h2>₹{item.pricePerNight}</h2>
        <button>Book Hotel</button>
      </div>

    </div>
  );
};

export default HotelCard;