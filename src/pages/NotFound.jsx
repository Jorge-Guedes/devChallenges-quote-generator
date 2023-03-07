import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./NotFound.module.css";

import Image from "../assets/not-found.svg";
import { BsArrowRight } from "react-icons/bs";

const NotFound = () => {
  return (
    <>
      <main className={styles.not_found}>
        <img src={Image} alt="ERROR 404. Sorry page not found" />
        <Link to="/">
          Voltar <BsArrowRight />
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
