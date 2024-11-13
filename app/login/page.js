import styles from "./Login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={styles.card}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter username"
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Enter password"
        />
        <Link href="/dashboard" className="btn btn-light w-100">
          Login
        </Link>
      </div>
    </>
  );
}
