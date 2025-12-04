import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
function App() {
  // Grouping related state together
  // Avoid deeply nested states
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] =useState({
    firstName: '',
    lastName: ''
  });
  const fullName = person.firstName + ' ' + person.lastName;

  return (
    <div>
      {fullName}
    </div>
  );
}

export default App;
