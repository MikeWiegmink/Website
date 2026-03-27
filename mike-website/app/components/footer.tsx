import { FaGithub, FaLinkedin } from "react-icons/fa";
import "@/styles/footer.styles.css"

export default function Footer() {
    return (
        <footer className="footerContainer">
            <hr />
            <section className="footerRow">
                <p>© {new Date().getFullYear()} Mike Wiegmink -  All rights reserved </p>
                <section className="footerSocials">
                    <a href="https://github.com/MikeWiegmink" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mike-wiegmink-263464390/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </section>
            </section>
        </footer>
    );
}
