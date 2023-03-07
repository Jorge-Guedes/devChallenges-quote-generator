import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";

const useActions = () => {
  const { data, loading, error, request } = useFetch();
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    request("https://type.fit/api/quotes");
  }, [request]);

  const randowCite = useCallback(() => {
    setTexts([]);
    if (data) {
      const index = parseInt(Math.random() * data.length);
      const quote = data[index];
      setText(quote.text);
      setAuthor(quote.author === null ? "unknown" : quote.author);
      return quote;
    }
    return null;
  }, [data]);

  const getAuthor = useCallback(
    async (nameAuthor) => {
      if (data) {
        let arrayText = [];
        await data.map(({ text, author }) => {
          if (nameAuthor === author) {
            arrayText.push(text);
          }
          return arrayText;
        });
        setTexts(arrayText);
      }
      return null;
    },
    [data]
  );

  return {
    data,
    loading,
    error,
    request,
    text,
    setText,
    texts,
    setTexts,
    author,
    setAuthor,
    randowCite,
    getAuthor,
  };
};

export default useActions;
