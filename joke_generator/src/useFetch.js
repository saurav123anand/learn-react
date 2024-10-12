import {useEffect, useState} from 'react';
const useFetch = (url) => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async (url) => {
      setLoading(true);
      setError(null);
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setJoke(data.joke || `${data.setup} - ${data.delivery}`);
      } catch (error) {
          setError(error.message);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchJoke(url);
  }, []);
  return { joke, loading, error, fetchJoke };

};
// export the useFetch hook as a default export
export default useFetch;
