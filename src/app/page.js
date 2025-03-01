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
      <h1 style={{ textAlign: "center", margin: "30px" }}>Welcome to HeliusDEV !</h1>
      <main className={styles.main}>
        <div className="detailbox">
          <div>
            <h3 style={{ textAlign: "center", padding: "10px" }}>know me</h3>
          </div>
          <div>
            <div className="singin_box">
              <div></div>
              <div className="sing_in_up_btn">
                <button>Sign In</button>
                <button>Sign UP</button>
              </div>
            </div>
            <div className="subscription_page">
              <h3 style={{ textAlign: "center" }}>Why take subsciption</h3>
              <div style={{fontSize:"16px", fontFamily:"math"}}>Get exclusive access to all Chrome extension codes and premium resources. Plus, become a part of the HeliusDEV community by contributing to ongoing projects.
                Subscribe now and take your development journey to the next level!</div>
              <h3 style={{ textAlign: "center", background:'#a6d1d5', padding:"4px"  }}>subcribe in only 100 rs.</h3>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center", position:"absolute", bottom:"20px"}}>
                <div style={{fontSize:"16px", fontFamily:"math"}}>click to get subsciption -</div>
                <button style={{background:"#06c70c"}}>subcribe</button>
              </div>
              {/* <RazorpayButton /> */}
            </div>
          </div>
        </div>
      </main>
      <div>
        helloadfasdf
      </div>
    </div>
  );
}
