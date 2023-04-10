import { useState, useEffect } from "react";

export default function useFetch(url) {
  // url is to be passed whenever we call useFetch
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // this function runs on every re-render i.e. once in the begining and later every time the data or state changes
    // const fetchData = async function () {
    //   const response = await fetch("http://localhost:8000/blogs");
    //   const results = await response.json();
    //   setBlogs(results)
    // };
    // fetchData()

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // its a good convention to check the response status to be true before iterating the fecthed data
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false); // once we get the data, we set isPending to false which hides the loading div
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000); //! we can return an arrow function from useEffect i.e. CLEANUP FUNCTION and that runs when a component unmounts from a page
  }, [url]); // empty DEPENDECY ARRAY ensures that this code only runs in the begining instead of every re-render
  // url in depedency means that this function would run everytime the url is fetched

  return { data, isPending, error };
}
