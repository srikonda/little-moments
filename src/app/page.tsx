import LeftSide from "@/components/Navbar/LeftSide";
import RightSide from "@/components/Navbar/RightSide";
import Footer from "@/layouts/CommonLayouts/Footer";
import Marquee from "@/layouts/CommonLayouts/Marquee";
import Navbar from "@/layouts/CommonLayouts/Navbar";
import AboutUs from "@/layouts/LandingPage/AboutUs";
import Hero from "@/layouts/LandingPage/Hero";
import PopularPlaces from "@/layouts/LandingPage/PopularPlaces";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <PopularPlaces />
      <AboutUs />
      <Marquee />
      <Footer />
    </div>
  );
}
