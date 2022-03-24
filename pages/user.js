import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function User({ users }) {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>{user.name.first}</li>
        ))}
      </ul>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=30");
  const users = await res.json();

  return {
    props: {
      users: [...users.results],
    },
  };
}

export default User;
