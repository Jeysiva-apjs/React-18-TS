import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Zero spice pizza",
    toppings: ["chicken"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "fish", "prawn"] });
  };
  return (
    <div>
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default App;
