import './App.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BestOffers from "./components/BestOffers";
import DiscoverDestinations from "./components/DiscoverDestinations";
import ExploreNearby from "./components/ExploreNearby";
import WhyFlyGlobe from "./components/WhyFlyGlobe";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <BestOffers />
      <DiscoverDestinations />
      <ExploreNearby />
      <WhyFlyGlobe />
      <ContactSection />
      <Footer />
    </div>
  );
}


