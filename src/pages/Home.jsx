import { useEffect } from "react";
import useActions from "../hooks/useActions";

// Components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  const { text, author, loading, error, randowCite, data } = useActions();

  useEffect(() => {
    randowCite();
  }, [data, randowCite]);

  return (
    <>
      <Header onClick={randowCite} />
      <Main text={text} author={author} loading={loading} error={error} />
      <Footer />
    </>
  );
}

export default Home;
