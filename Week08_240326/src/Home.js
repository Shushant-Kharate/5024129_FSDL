function Home({ users }) {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 && <p>No users added</p>}

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
