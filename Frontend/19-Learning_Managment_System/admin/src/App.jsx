import DataContext from "../Context";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataContext.Provider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
