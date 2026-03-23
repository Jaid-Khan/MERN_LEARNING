import DataContext from "../Context";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <DataContext.Provider value={{}}>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
