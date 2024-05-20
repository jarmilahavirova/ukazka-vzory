import { useEffect, useState } from "react";
import { ListItem } from "../ListItem";

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/items");
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>
        Vybraná položka má{" "}
        {selectedId !== null &&
          `${items[selectedId].nutrients.energy.value} ${items[selectedId].nutrients.energy.unit}`}
      </p>
      <div className="list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            selected={item.id === selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </>
  );
};
