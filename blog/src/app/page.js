'use client'
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <User name={"Prem Danav"} />
      <User name={"John Doe"} /> */}
      <h1>Home Page</h1>
      <button onClick={() => alert("Hello")}>Click Me</button>
    </main>
  );
}

const User = ({ name }) => {
  return <div>User name is {name}</div>
}