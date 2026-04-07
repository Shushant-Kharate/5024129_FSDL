import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !age) {
      alert("All fields required!");
      return;
    }

    addUser({ name, age });

    setName("");
    setAge("");

    navigate("/");
  }

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
