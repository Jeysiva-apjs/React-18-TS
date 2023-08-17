import Cart from "./components/cart";
import Products from "./components/Products";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(["Book", "Monitor", "Laptop", "Mouse"]);

  return (
    <div className="container">
      <Cart itemCount={items.length}></Cart>
      <Products items={items} onClear={() => setItems([])}></Products>
    </div>
  );
}

export default App;
