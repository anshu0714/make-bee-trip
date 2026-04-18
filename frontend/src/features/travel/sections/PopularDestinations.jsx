import SectionWrapper from "../../../components/common/SectionWrapper";

const destinations = [
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Manali",
    img: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
  },
  {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

const PopularDestinations = () => {
  return (
    <SectionWrapper
      title="Popular Destinations"
      subtitle="Trending places people love"
    >
      <div className="destinations-grid" id="destinations">
        {destinations.map((d, i) => (
          <div key={i} className="destination-card">
            <img src={d.img} alt={d.name} />
            <div className="overlay">
              <h3>{d.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PopularDestinations;
