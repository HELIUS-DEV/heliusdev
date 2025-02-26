'use client'
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("name")
  const router = useRouter()

  const btn = (data) => {
    setName(data)
    console.log("heloo")
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to HeliusDEV !</h1>
      <main className={styles.main}>
        <div>
          my name is HELIUS DEV this is first change {name}
        </div>
        <button onClick={() => { btn("parvez alam "), router.push("/login") }}> this is btn</button>
      </main>
    </div>
  );
}
