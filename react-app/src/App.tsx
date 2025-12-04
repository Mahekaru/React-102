import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
function App() {
  // Grouping related state together
  // Avoid deeply nested states
  const [customer, setCustomer] = useState({
    name: 'John',
    address:{
      city: 'San Francisco',
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({...customer,
      address: {...customer.address, zipCode: 12345},
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
