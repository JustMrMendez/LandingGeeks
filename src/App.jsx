import React, { useState } from "react";
import { Card } from "./lib/shared/Card";
import Footer from "./lib/Footer";
import NavBar from "./lib/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap justify-around gap-5">
        <Card img="src/source/1.jpg" />
        <Card img="src/source/2.jpg" />
        <Card img="src/source/3.jpg" />
        <Card img="src/source/4.jpg" />
      </div>
      <Footer />
    </>
  );
}

export default App;
