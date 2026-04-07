import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/add" element={<AddUser addUser={addUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
