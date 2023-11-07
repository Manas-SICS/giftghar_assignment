import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero } from "./components";
import { useState } from "react";

const App = () => {
  const [activeId, setActiveId] = useState("");
  const getData = (data) => {
    setActiveId(data);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div
          className={` ${
            activeId == "occasionsel" ? "bg-hero-pattern2" : "bg-hero-pattern1"
          } bg-cover  bg-center`}
        >
          <Navbar />
          <Hero onClick={getData} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
