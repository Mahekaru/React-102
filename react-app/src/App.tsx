import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
function App() {
  // Grouping related state together
  // Avoid deeply nested states
const [bugs, setBugs] = useState([
  {id:1,title:'Bug 1', fixed: false},
  {id:2,title:'Bug 2', fixed: false},
]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
