import SectionWrapper from "../../../components/common/SectionWrapper";

const testimonials = [
  {
    name: "Rahul",
    text: "Best booking experience ever!",
  },
  {
    name: "Sneha",
    text: "Super easy and affordable.",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper title="What Our Users Say">
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
