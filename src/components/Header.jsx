import { MdAutorenew } from "react-icons/md";
import styles from "./Header.module.css";

const Header = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <button className={styles.btn_randow} onClick={onClick}>
        random
        <MdAutorenew />
      </button>
    </header>
  );
};

export default Header;
