import styles from "./Error.module.css";

const Error = ({ error }) => {
  return <>{error && <p className={styles.error}>{error}</p>}</>;
};

export default Error;
