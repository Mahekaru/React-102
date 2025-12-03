import { useState } from "react";

interface props {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: props) {
  //   let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Hook Example
  // useState -- state hook, has data which changes over time.
  // hook is a special function which allows us to use features of react

  function getMessage() {
    return items.length === 0 && <p>There are no items in the list</p>;
  }

  return (
    <>
      <h1>{header}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
