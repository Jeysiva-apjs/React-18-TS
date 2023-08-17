import React from "react";

interface Props {
  items: string[];
  onClear: () => void;
}

const Products = ({ items, onClear }: Props) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Products;
