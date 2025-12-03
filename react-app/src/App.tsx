import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>This is an alert message!</Alert>}
      <button className="btn btn-primary m-2" onClick={() => setAlertVisible(true)}>Show Alert</button>
    </div>
  );
}

export default App;
