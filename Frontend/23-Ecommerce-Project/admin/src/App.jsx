import axios from "axios";
import AppContext from "./Context";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const [data, setData] = useState({
    api: "http://localhost:3000/admin",
  });

  useEffect(() => {
    axios
      .post(
        data.api + "/auth/check-token",
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
