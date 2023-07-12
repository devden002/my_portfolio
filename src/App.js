import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#0f172a]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Experience />
          <Works />
          {/* <Feedbacks/> */}
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
