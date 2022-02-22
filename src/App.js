import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import Component1 from "./TodoList/component1";
import SignRoute from "./myapp/signroute";
//import SignButton from "./redux/signButton";

function App() {
  return (
    <div className="App">
      <br />
      <BrowserRouter>
        {/* <Component1/> */}
        <SignRoute />
        {/* <SignButton/> */}
      </BrowserRouter>
    </div>
  );
}

export default App; 
