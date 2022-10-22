import React, { useState } from "react";
import Card from "./lib/Card";

function App() {
  return (
    <div className="flex flex-wrap justify-around gap-3">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
