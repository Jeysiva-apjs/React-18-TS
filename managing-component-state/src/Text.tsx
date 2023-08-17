import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const Text = ({ children, maxChars = 100 }: Props) => {
  const [isLessText, setIsLessText] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  return (
    <div>
      <span>
        {isLessText
          ? children.substring(0, maxChars) + "..."
          : children + "..."}
      </span>
      <button onClick={() => setIsLessText(!isLessText)}>
        {isLessText ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Text;
