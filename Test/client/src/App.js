import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comp/HomePage/HomePage";
import Register from "./comp/Register/Register";
import Login from "./comp/Login/Login";
import Notication from "./comp/Notication/Notication";
import Create from "./comp/Create/Create";
import EditData from "./comp/EditData/EditData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/noti" element={<Notication />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
