import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import MainHeaderBg from "@/components/mainHeaderBg";

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
              <Link href={"/meals"}> Browse Meals </Link>
            </li>
            <li>
              <Link href={"/community"}> Foodies Community </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
