import { useState } from "react";
import styles from "./ListGroups.module.css";

interface Props {
  items: string[];
  heading: string;
  //onSelectItem: (item: string) => void;
}

function ListGroups({ items, heading }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul
        className={styles.styleGroups}
        style={{ backgroundColor: "lightblue" }}
      >
        {items.length == 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedItem == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              //onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;
