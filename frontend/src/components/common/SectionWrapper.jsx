const SectionWrapper = ({ title, subtitle, children }) => {
  return (
    <section className="section">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
