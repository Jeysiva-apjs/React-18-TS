import { useState } from "react";
import Alert from "../Alert";
import styles from "./Button.module.css";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ text, color = "primary" }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked && (
        <Alert onClose={() => setIsClicked(false)}>Button is clicked</Alert>
      )}
      <button className={styles.buttonColor} onClick={() => setIsClicked(true)}>
        {text}
      </button>
    </>
  );
};

export default Button;
