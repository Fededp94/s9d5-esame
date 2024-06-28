import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Component/Navbar.css";
import "./Component/Footer.css";
import "./ComponentGallery.css";

import Navbar from "./Component/Navbar.css";
import Footer from "./Component/Footer.css";
import Gallery from "./Component/Gallery.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Gallery title="Harry Potter" query="Harry Potter" />
        <Gallery title="Lord of the Rings" query="Lord of the Rings" />
        <Gallery title="Star Wars" query="Star Wars" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
