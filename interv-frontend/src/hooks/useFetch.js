import { useEffect, useState } from "react";
// import { API_BASE_URL } from "../constants";

const useFetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3500/")
      .then((res) => res.text())
      .then((res) => setData([...res]));
  }, []);
  return { data, setData };
};

export default useFetch;
