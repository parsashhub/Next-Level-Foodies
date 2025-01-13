import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import MainHeaderBg from "@/components/mainHeaderBg";
import NavLinks from "@/components/navLinks";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinks href={"/meals"}>Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href={"/community"}>Foodies Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
