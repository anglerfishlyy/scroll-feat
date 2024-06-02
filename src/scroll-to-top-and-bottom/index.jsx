import { useRef, useEffect, useState } from "react";
import React from "react";


export default function ScrollToTopAndBottom() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://dummyjson.com/products?limit=100")
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched:", data);
        setData(data);
        setPending(false);
      })
      .catch(error => {
        console.error("Fetching error:", error);
        setError(error);
        setPending(false);
      });
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (error) {
    return <h1>Error occurred! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading! Please wait</h1>;
  }

  if (!data) {
    return <h1>No data found!</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
