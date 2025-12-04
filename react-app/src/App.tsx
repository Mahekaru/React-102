import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./Form";
function App() {
  // Grouping related state together
  // Avoid deeply nested states
const [tags, setTags] = useState(['happy','cheerful']);


  const handleClick = () => {
    // add a new item to the array
    setTags([...tags, 'exciting']);

    // Remove 
    setTags(tags.filter(tag => tag !== 'happy'));

    // update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
