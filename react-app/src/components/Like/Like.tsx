import { BsFillFileEarmarkFill } from "react-icons/bs";
import { useState } from "react";

const Like = () => {
  const [isClicked, setIsClciked] = useState(false);
  return (
    <div>
      <BsFillFileEarmarkFill
        color={isClicked && "red"}
        size="50"
        onClick={() => setIsClciked((prev) => !prev)}
        style={{ margin: "100px" }}
      ></BsFillFileEarmarkFill>
    </div>
  );
};

export default Like;
