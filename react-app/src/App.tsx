import Message from "./Message";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <Button onClick={() => console.log("Button clicked")}>Click Me</Button>
    </div>
  );
}

export default App;
