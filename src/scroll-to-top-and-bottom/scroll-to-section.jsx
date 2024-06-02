import React, { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blueviolet",
      },
      paragraph: "RANDOM CONTENT: The first card delves into the importance of staying curious in life. Curiosity drives us to explore, discover, and learn new things, enriching our experiences and broadening our perspectives."
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
      paragraph: "RANDOM CONTENT: The second card discusses the value of resilience. In the face of challenges and setbacks, resilience allows us to adapt, recover, and grow stronger, helping us to navigate life's ups and downs with grace."
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
      paragraph: "RANDOM CONTENT: The third card highlights the significance of empathy. By understanding and sharing the feelings of others, we build stronger connections and create a more compassionate and supportive community."
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
      paragraph: "RANDOM CONTENT: The fourth card emphasizes the power of collaboration. Working together, we combine our strengths and talents, achieving greater success and innovation than we ever could individually."
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blueviolet",
      },
      paragraph: "RANDOM CONTENT: The fifth card explores the concept of mindfulness. By being present in the moment and fully engaged with our surroundings, we can reduce stress, enhance our well-being, and live more fulfilling lives."
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div key={index} ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
          <p>{dataItem.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
