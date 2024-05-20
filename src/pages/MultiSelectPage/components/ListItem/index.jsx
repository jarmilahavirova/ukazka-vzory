import { useState } from "react";

export const ListItem = ({ item, onClick, amount }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    if (selected) {
      onClick(amount - 1);
    } else {
      onClick(amount + 1);
    }
  };

  return (
    <div
      className={`panel${selected ? " panel--selected" : ""}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
