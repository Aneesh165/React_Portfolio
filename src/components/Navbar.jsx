import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/AneeshLogo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={Logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/aneesh-rahman-mp-909500252/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Aneesh165"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub/>
        </a>
        <a
          href="/"
        //   target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="/"
        //   target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
