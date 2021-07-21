import Image from "next/Image";

import FuutballLogo from "../../public/assets/fuutball_logo.svg";
import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <section>
          <Image
            src={FuutballLogo}
            width={220}
            alt="😃 Fuutball"
            draggable={false}
          />
        </section>
        <section className={styles.sensesContainer} />
      </nav>
    </header>
  );
}

export default Header;
