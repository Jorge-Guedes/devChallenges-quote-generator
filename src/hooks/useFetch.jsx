import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      return json;
    } catch (e) {
      json = null;
      setError(`Error: ${e}`);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
