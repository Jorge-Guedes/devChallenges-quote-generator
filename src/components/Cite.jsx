import styles from "./Cite.module.css";

const Cite = ({ children }) => {
  return <blockquote className={styles.cite}>{children}</blockquote>;
};

export default Cite;
