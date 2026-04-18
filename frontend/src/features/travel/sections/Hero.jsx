import SearchBox from "../components/SearchBox";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <h1>
          Explore the World with <span>Make Bee Trip</span>
        </h1>

        <p>Book Flights, Buses, Trains & Hotels at the best prices</p>

        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;
