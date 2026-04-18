import { useNavigate } from "react-router-dom";
import SectionWrapper from "../../../components/common/SectionWrapper";

const services = [
  {
    title: "Flights",
    desc: "Compare & book flights instantly",
    icon: "✈️",
    type: "flight",
  },
  {
    title: "Buses",
    desc: "Affordable and comfortable buses",
    icon: "🚌",
    type: "bus",
  },
  {
    title: "Trains",
    desc: "Fast & reliable train booking",
    icon: "🚆",
    type: "train",
  },
  {
    title: "Hotels",
    desc: "Best stays at best prices",
    icon: "🏨",
    type: "hotel",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/results?type=${type}`);
  };

  return (
    <SectionWrapper
      title="Our Services"
      subtitle="Everything you need for your journey"
    >
      <div className="services-grid" id="services">
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card clickable"
            onClick={() => handleClick(s.type)}
          >
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
