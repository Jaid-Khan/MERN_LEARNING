import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import UserContext from "./UserContext";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <UserContext.Provider value={{count, setCount}}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
