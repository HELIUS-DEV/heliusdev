'use client'
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import RazorpayButton from "../../payment/razorpaybtn";


export default function Home() {
  const [name, setName] = useState("name")
  const router = useRouter()

  const btn = (data) => {
    setName(data)
    console.log("heloo")
  }

  return (
    <div className="main_page_chind">
      <h1 style={{textAlign:"center", margin:"30px"}}>Welcome to HeliusDEV !</h1>
      <main className={styles.main}>
          <div className="detailbox">
            <div>
              <h3 style={{textAlign:"center", padding:"10px"}}>know me</h3>
            </div>
            <div>
              <div>
                <button>Sign In</button>
                <button>Sign UP</button>
              </div>
              <div>
                <h3>why take subsciption</h3>
              </div>
            </div>
          </div>
      </main>
          <RazorpayButton />
    </div>
  );
}
