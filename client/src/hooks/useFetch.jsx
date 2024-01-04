import { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import { useAuth } from "../context/AuthContext";
const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  useEffect(() => {
    fetch(BASE_URL + path, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        throw new Error(`Error message: ${String(error)}`);
      });
  }, [path]);

  return { data, error, loading };
};

export default useFetch;
