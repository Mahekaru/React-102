import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
import produce from 'immer';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {

  }

  return (
    <div>
      <button onClick={() => {
        handleClick
        console.log(game);
      }}>Change Name</button>
    </div>
  );
};

export default App;
