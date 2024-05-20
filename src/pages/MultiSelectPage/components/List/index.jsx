import { useEffect, useState } from "react";
import { ListItem } from "../ListItem";

export const List = () => {
  const [items, setItems] = useState(null);
  const [amount, setAmount] = useState(0);

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
      <p>Počet položek: {amount}</p>
      <div className="list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={setAmount}
            amount={amount}
          />
        ))}
      </div>
    </>
  );
};
