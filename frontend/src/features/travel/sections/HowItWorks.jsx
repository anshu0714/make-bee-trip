import SectionWrapper from "../../../components/common/SectionWrapper";

const steps = ["Search", "Compare", "Book", "Travel"];

const HowItWorks = () => {
  return (
    <SectionWrapper title="How It Works">
      <div className="steps-grid">
        {steps.map((step, i) => (
          <div key={i} className="step-card">
            <span>{i + 1}</span>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
