import { useEffect, useState } from "react";

/**
 *
 * @param {String} endpoint
 * @returns {Array} [data,loading,error]
 */

const useFetch = (endpoint) => {
  /**
   * Feature
   * Get request on mount/url change
   * Loading state
   * Error Handling
   */
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [endpoint]);

  return [data, isLoading, error];
};

export default useFetch;
