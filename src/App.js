import React from "react";
import Filter from "./components/Filter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🖼️ Redux Toolkit Gallery
      </h1>
      <Filter />
      <Gallery />
    </div>
  );
}

export default App;
