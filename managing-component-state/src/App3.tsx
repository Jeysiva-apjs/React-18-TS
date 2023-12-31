import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li>
            {item.title}--{item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default App;
