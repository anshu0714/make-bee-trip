const FlightCard = ({ item }) => {
  return (
    <div className="travel-card flight">

      <div className="left">
        <p className="brand">{item.airline}</p>

        <div className="route">
          <div>
            <h3>{item.from}</h3>
            <p>{item.departure}</p>
          </div>

          <div className="line">— ✈ —</div>

          <div>
            <h3>{item.to}</h3>
            <p>{item.arrival}</p>
          </div>
        </div>

        <p className="duration">{item.duration}</p>
      </div>

      <div className="right">
        <h2>₹{item.price}</h2>
        <button>Book Now</button>
      </div>

    </div>
  );
};

export default FlightCard;