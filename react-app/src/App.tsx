import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
import produce from 'immer';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

// Add toppings to pizza
function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {

  }

  return (
    <button onClick={handleClick}>Click</button>
  );
};

export default App;
