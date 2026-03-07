import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <input className={styles.input} type="text" placeholder="Username" />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />

        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Login;
