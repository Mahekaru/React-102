import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
import produce from 'immer';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);


  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App;
