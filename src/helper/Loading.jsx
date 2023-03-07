import { AiOutlineLoading } from "react-icons/ai";
import styles from "./Loading.module.css";

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <p className={styles.loading}>
          <AiOutlineLoading />
        </p>
      )}
    </>
  );
};

export default Loading;
