import FlightCard from "./FlightCard";
import BusCard from "./BusCard";
import TrainCard from "./TrainCard";
import HotelCard from "./HotelCard";

const TravelCard = ({ item, type }) => {
  switch (type) {
    case "flight":
      return <FlightCard item={item} />;

    case "bus":
      return <BusCard item={item} />;

    case "train":
      return <TrainCard item={item} />;

    case "hotel":
      return <HotelCard item={item} />;

    default:
      return null;
  }
};

export default TravelCard;
