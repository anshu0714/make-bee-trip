import Button from "../../../components/common/Button";
import { showSuccess } from "../../../utils/toast.util";

const TravelCard = ({ item, type }) => {
  const handleBooking = () => {
    showSuccess(
      `Booking for ${item.name || item.airline || item.train} initiated 🚀`,
    );
  };

  const title = item.airline || item.operator || item.train || item.name;

  const price = item.price || item.pricePerNight;

  return (
    <div className={`travel-card ${type === "hotel" ? "hotel-card" : ""}`}>
      {type === "hotel" && (
        <div className="hotel-image">
          <img
            src={`${item.image}?w=500&q=70&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <div className="overlay">
            <span className="rating">⭐ {item.rating}</span>
          </div>
        </div>
      )}

      <div className="card-content">
        <div className="card-header">
          <div>
            <h3>{title}</h3>
            {type !== "hotel" && (
              <p className="sub">{item.type || item.class || ""}</p>
            )}
          </div>

          <div className="price-box">
            <span className="price">₹{price}</span>
            {type === "hotel" && <span className="per-night">/night</span>}
          </div>
        </div>

        <div className="card-route">
          {type !== "hotel" ? (
            <>
              <div className="location">
                <span className="city">{item.from}</span>
                <span className="time">{item.departure}</span>
              </div>

              <div className="divider">
                <span>→</span>
                <small>{item.duration}</small>
              </div>

              <div className="location">
                <span className="city">{item.to}</span>
                {item.arrival && <span className="time">{item.arrival}</span>}
              </div>
            </>
          ) : (
            <div className="hotel-info">
              <span className="city">{item.city}</span>
            </div>
          )}
        </div>

        <div className="card-meta">
          {type === "bus" && <span>🚌 {item.type}</span>}
          {type === "train" && <span>🚆 {item.class}</span>}
          {type === "flight" && <span>✈️ Non-stop</span>}
          {type === "hotel" && <span>🏨 Premium Stay</span>}
        </div>

        <div className="card-footer">
          <Button onClick={handleBooking}>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
