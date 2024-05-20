import { useEffect, useState } from "react";
import { ListItem } from "../ListItem";

export const List = () => {
  const [items, setItems] = useState(null);
  const [fetchData, setFetchData] = useState("items");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:4000/api/${fetchData} `);
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, [fetchData]);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
      <select
        onChange={(event) => {
          setFetchData(event.target.value);
        }}
      >
        <option value="items"> Všechny položky</option>
        <option value="items?filter=nutrients.fiber.value:gt:2">
          všechny položky s množstvím vlákniny větším než 2 g na 100 g
        </option>
        <option value="items?filter=nutrients.proteins.value:gt:1.5">
          všechny položky s množstvím bílkovin větším než 1,5 g na 100 g
        </option>
        <option value="items?filter=nutrients.fats.value:lt:1.3">
          všechny položky s množstvím tuků menším než 1,3 g na 100 g
        </option>
      </select>
    </>
  );
};
