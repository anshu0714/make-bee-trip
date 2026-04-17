const BusCard = ({ item }) => {
  return (
    <div className="travel-card bus">

      <div className="left">
        <p className="brand">{item.operator}</p>

        <div className="route">
          <div>
            <h3>{item.from}</h3>
            <p>{item.departure}</p>
          </div>

          <div className="line">— 🚌 —</div>

          <div>
            <h3>{item.to}</h3>
          </div>
        </div>

        <p className="duration">{item.duration}</p>
        <span className="tag">{item.type}</span>
      </div>

      <div className="right">
        <h2>₹{item.price}</h2>
        <button>Book Bus</button>
      </div>

    </div>
  );
};

export default BusCard;