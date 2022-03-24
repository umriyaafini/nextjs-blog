function User({ users }) {
  console.log(users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>{user.name.first}</li>
      ))}
      hei
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=30");
  const users = await res.json();
  console.log(users);

  return {
    props: {
      users: [...users.results],
    },
  };
}

export default User;
