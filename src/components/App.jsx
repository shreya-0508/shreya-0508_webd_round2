import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import News from "./News";
import League from "./League";
import Schedule from "./Schedule";
import Summary from "./Summary";
import Team from "./Team";
import Player from "./Player";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <News />
      <Schedule />
      <League />
      <Summary />
      <Team />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
