import Styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className={Styles.navbar}>
        <div className={Styles.navbarContent}>
          <div className={Styles.logo}> 
            <Image src="/Images/mysign.png" width="200" height="100" alt="Logo_image"> 
            </Image>
          </div>
          <div className={Styles.navLinks}>
            <Link href="#contact">Contact</Link>
            <Link href="./Resume.pdf" target="_BLANK">Resume</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
