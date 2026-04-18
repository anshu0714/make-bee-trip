import { useEffect, useState } from "react";
import SectionWrapper from "../../../components/common/SectionWrapper";
import { getTravelData } from "../services/travel.api";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await getTravelData({ type: "hotel" });
      setHotels(res.data.slice(0, 4));
    };
    fetchHotels();
  }, []);

  return (
    <SectionWrapper title="Featured Hotels" subtitle="Handpicked stays for you">
      <div className="hotels-grid" id="hotels">
        {hotels.map((h) => (
          <div key={h.id} className="hotel-card">
            <img
              src={`${h.image}?w=400&q=70&auto=format`}
              alt={h.name}
              loading="lazy"
            />{" "}
            <h3>{h.name}</h3>
            <p>{h.city}</p>
            <p>⭐ {h.rating}</p>
            <p className="price">₹{h.pricePerNight}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedHotels;
