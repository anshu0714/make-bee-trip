import SectionWrapper from "../../../components/common/SectionWrapper";

const testimonials = [
  {
    name: "Rahul",
    text: "Best booking experience ever! I found amazing deals and had a smooth trip. Will use again!",
  },
  {
    name: "Sneha",
    text: "Love the user-friendly interface and great customer support. Made my travel planning a breeze!",
  },
  {
    name: "Arjun",
    text: "Highly recommend! The personalized recommendations helped me discover hidden gems on my trip. Fantastic service!",
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
