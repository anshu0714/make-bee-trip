import SectionWrapper from "../../../components/common/SectionWrapper";

const points = [
  "⚡ Instant Booking",
  "💰 Best Price Guarantee",
  "🔒 Secure Payments",
  "📞 24/7 Support",
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper title="Why Choose Us">
      <div className="why-grid">
        {points.map((p, i) => (
          <div key={i} className="why-card">
            {p}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
