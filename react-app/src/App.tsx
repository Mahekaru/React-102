import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
import produce from "immer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

// change the quantity of one of the items in the cart
function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1, price: 100 },
      { id: 2, title: "Product 2", quantity: 1, price: 200 },
    ],
  });

  const handleClick = () => {

  };

  return <button onClick={handleClick}>Click</button>;
}

export default App;
