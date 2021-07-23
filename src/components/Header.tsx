/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

import FuutballLogo from "../../public/assets/fuutball_logo.svg";
import styles from "../styles/components/Header.module.scss";

const MyAnchorToLogo = forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        src={FuutballLogo}
        width={220}
        alt="😃 Fuutball"
        draggable={false}
      />
    </a>
  );
});

MyAnchorToLogo.displayName = "MyAnchorToLog";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link href="/" passHref>
          <MyAnchorToLogo />
        </Link>
        <section className={styles.sensesContainer} />
      </nav>
    </header>
  );
}

export default Header;
