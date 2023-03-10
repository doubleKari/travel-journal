import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

import data from "./data.js";

function App() {
  console.log(data);
  const listItems = data.map((item) => <Card key={item.id} {...item} />);
  return (
    <div className="font-inter w-full h-full">
      <Header />
      <main className="w-full h-full my-6 px-5 mb-5 sm:flex justify-center mt-20">
        <ul className="space-y-5">{listItems}</ul>
      </main>
    </div>
  );
}

export default App;
