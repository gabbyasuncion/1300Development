import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from "./components/Shop";


// This is the list of items we are selling in our shop.
// TODO: Replace it with your own items and attributes!
const ProductList = [
  { name: "Cute Plant", size: "Medium"},
  { name: "Happy Plant", size: "Large"},
  { name: "Sad Plant", size: "Desktop"},
  { name: "Smart Plant", size: "Medium"},
  { name: "Sleepy Plant", size: "Desktop"},
  { name: "Hungry Plant",size: "Desktop"},
  { name: "Evil Plant", size: "Large"},
  { name: "Grumpy Plant",size: "Desktop"},
  { name: "Dopey Plant", size: "Medium"},
  { name: "Sneezy Plant", size: "Large"},
  { name: "Dancing Plant", size: "Desktop"},
  { name: "Singing Plant", size: "Medium"},
]

function App() {
  return (
    <div className="app">
      <h1>My Shop</h1>
      {/* An instance of the Shop component takes in your product list. This passes your data from ProductList to the Shop component as a prop. */}
      <Shop list={ProductList} />
    </div>
  );
}

export default App;