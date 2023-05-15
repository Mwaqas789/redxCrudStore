import "./App.css";
import CreateUser from "./component/CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Create from "./component/CrudStudents/Create";
import EditStudent from "./component/CrudStudents/EditStudent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
