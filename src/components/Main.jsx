import { Link } from "react-router-dom";

import Cite from "../components/Cite";
import Loading from "../helper/Loading";
import Error from "../helper/Error";

import { BsArrowRight } from "react-icons/bs";
import styles from "./Main.module.css";

const Main = ({ text, author, loading, error }) => {
  return (
    <main className={styles.containerCite}>
      <Loading loading={loading} />
      <Error error={error} />
      {!loading && !error && (
        <div>
          <Cite>{text}</Cite>
          <Link to={`/author/${author}`} className={styles.author}>
            {author} <BsArrowRight />{" "}
          </Link>
        </div>
      )}
    </main>
  );
};

export default Main;
