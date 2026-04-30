import AppContext from "./context";
import { useState } from "react";


function App() {
  
  const [data, setData] = useState({
    api: "http://localhost:5000",
  });




  return (
    <AppContext.Provider value={{data, setData}}>
      <h1>This is Home Page</h1>
    </AppContext.Provider>
  );
}

export default App;
