import { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import { useAuth } from "../context/AuthContext";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + path, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (!isMounted) return;

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        if (!isMounted) return;

        setError(error.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [path, token]);

  return { data, error, loading };
};

export default useFetch;
