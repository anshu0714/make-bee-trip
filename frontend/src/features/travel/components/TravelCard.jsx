import Button from "../../../components/common/Button";

const TravelCard = ({ item, type }) => {
  return (
    <div className="travel-card">
      <div className="card-header">
        <h3>{item.airline || item.operator || item.train || item.name}</h3>
        <span className="price">₹{item.price || item.pricePerNight}</span>
      </div>

      <div className="card-body">
        {type !== "hotel" ? (
          <>
            <p>
              {item.from} → {item.to}
            </p>
            <p>
              {item.departure} • {item.duration}
            </p>
          </>
        ) : (
          <>
            <p>{item.city}</p>
            <p>⭐ {item.rating}</p>
          </>
        )}
      </div>

      <Button>Book Now</Button>
    </div>
  );
};

export default TravelCard;
