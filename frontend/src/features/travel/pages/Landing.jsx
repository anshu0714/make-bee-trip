import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import PopularDestinations from "../sections/PopularDestinations";
import FeaturedHotels from "../sections/FeaturedHotels";
import WhyChooseUs from "../sections/WhyChooseUs";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";

const Landing = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <PopularDestinations />
        <FeaturedHotels />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export default Landing;
