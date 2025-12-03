import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} header="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
