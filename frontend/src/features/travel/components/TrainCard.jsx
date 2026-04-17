const TrainCard = ({ item }) => {
  return (
    <div className="card train-card">
      <div className="card-top">
        <h3>{item.from} → {item.to}</h3>
        <span className="price">₹{item.price}</span>
      </div>

      <p className="sub">{item.train}</p>

      <div className="meta">
        <span>{item.departure}</span>
        <span>{item.duration}</span>
      </div>

      <span className="tag">{item.class}</span>

      <button className="book-btn">Book Train</button>
    </div>
  );
};

export default TrainCard;