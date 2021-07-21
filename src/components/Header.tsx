import Image from "next/Image";
import Link from "next/link";

import FuutballLogo from "../../public/assets/fuutball_logo.svg";
import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link href="/" passHref>
          <Image
            src={FuutballLogo}
            width={220}
            alt="😃 Fuutball"
            draggable={false}
          />
        </Link>
        <section className={styles.sensesContainer} />
      </nav>
    </header>
  );
}

export default Header;
