import SectionWrapper from "../../../components/common/SectionWrapper";

const services = [
  {
    title: "Flights",
    desc: "Compare & book flights instantly",
    icon: "✈️",
  },
  {
    title: "Buses",
    desc: "Affordable and comfortable buses",
    icon: "🚌",
  },
  {
    title: "Trains",
    desc: "Fast & reliable train booking",
    icon: "🚆",
  },
  {
    title: "Hotels",
    desc: "Best stays at best prices",
    icon: "🏨",
  },
];

const Services = () => {
  return (
    <SectionWrapper
      title="Our Services"
      subtitle="Everything you need for your journey"
    >
      <div className="services-grid" id="services">
        {services.map((s, i) => (
          <div key={i} className="service-card">
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
