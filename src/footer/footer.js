import { FaYoutube, FaInstagram, FaGithub  } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Footer() {
    return (
        <footer className="main_footer">
            <p>term & condition </p>
            <div style={{ display: "grid", gap: "10px" }}>
                <h4>contact </h4>
                <p>email: <span>heliustime@gmail.com</span></p>
            </div>
            <div className="" style={{ display: "flex", gap: "10px" }}>
                <FaYoutube style={{ fontSize: "20px" }} />
                <FaGithub  style={{ fontSize: "20px" }} />
                <FaInstagram style={{ fontSize: "20px" }} />
                <IoLogoWhatsapp style={{ fontSize: "20px" }} />
            </div>
        </footer>
    );
}