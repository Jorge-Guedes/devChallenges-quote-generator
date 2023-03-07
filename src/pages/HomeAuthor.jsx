import useActions from "../hooks/useActions";

// Components
import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";

import { Link, useParams } from "react-router-dom";
import styles from "./HomeAuthor.module.css";
import { useEffect } from "react";

const HomeAuthor = () => {
  const { loading, getAuthor, data, texts } = useActions();

  const authorParam = useParams().nome;

  useEffect(() => {
    getAuthor(authorParam);
  }, [data, getAuthor, authorParam]);

  return (
    <>
      <div className={styles.headerLink}>
        <Link to="/">
          <Header />
        </Link>
      </div>
      <Author author={authorParam} arrayText={texts} loading={loading} />
      <Footer />
    </>
  );
};

export default HomeAuthor;
