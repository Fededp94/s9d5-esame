import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
