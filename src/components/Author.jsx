import Cite from "../components/Cite";
import Loading from "../helper/Loading";
import styles from "./Author.module.css";

const Author = ({ author, arrayText, loading }) => {
  return (
    <div className={styles.container_author}>
      <h1 className={styles.author}>{author}</h1>
      {loading && <Loading loading={loading} />}
      {!loading &&
        arrayText?.length > 0 &&
        arrayText.map((text, id) => <Cite key={id}>{text}</Cite>)}
      {!loading && arrayText?.length <= 0 && <p>No author quotes.</p>}
    </div>
  );
};

export default Author;
