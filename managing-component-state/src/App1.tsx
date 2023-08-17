import React, { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 24,
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Wick" } });
  };

  return (
    <div>
      <h1>{game.id}</h1>
      <h1>{game.player.name}</h1>
      <h1>{game.player.age}</h1>
      <button onClick={handleClick}>My Button</button>
    </div>
  );
};

export default App;
