"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
    if (username !== "" && password !== "") {
      return setEnableSubmit(true);
    }
    setEnableSubmit(false);
  }, [username, password]);

  return (
    <>
      <div className={styles.login + " bg-transparent card"}>
        <h1 className={styles.loginTitle + " text-light text-center"}>
          Countries Login
        </h1>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          href="/dashboard"
          className={
            "btn btn-light w-100 " + (!enableSubmit ? styles.linkDisabled : "")
          }
          disabled={!enableSubmit}
        >
          Login
        </Link>
      </div>
    </>
  );
}
