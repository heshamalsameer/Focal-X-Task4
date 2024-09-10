// import viteLogo from "/vite.svg";
import "./App.css";
import { Contect } from "./pages/contactUs/Contact";
import { Doctors } from "./pages/doctors/Doctors";
import { Footer } from "./pages/footer/Footer";
import { Questions } from "./pages/questions/Questions";
import { Services } from "./pages/services/Services";
import { Testimonials } from "./pages/testimonials/Testimonials";
import { Pricing } from "./pages/pricing/Pricing";
import { Gallery } from "./pages/gallery/Gallery";
import { Department } from "./pages/departments/Department";
import MakePoint from "./Pages/MakePoint/MakePoint";
import About from "./components/About/About";
import HeroCards from "./components/HeroCards/HeroCards";
import NavBar from "./components/NavBar/NavBar";
import NeedHelp from "./components/NeedHelpp/NeedHelpp";
import Slider from "./components/Slider/Slider";
import Top from "./components/Top/Top";

function App() {
  return (
    <>
      <Top />
      <NavBar />
      <Slider />
      <HeroCards />
      <NeedHelp />
      <About />
      <Services />
      <MakePoint />
      <Department />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <Questions />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
