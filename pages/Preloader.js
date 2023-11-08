import React, { useState, useEffect } from "react";
import Styles from "../styles/Preloader.module.css";

const Preloader = () => {
  const [count, setCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
  const name = ["D", "E", "V"];
  const colors = [
    "#D18080",
    "#29487D",
    "#739993",
    "#3C5898",
    "#d3a488",
    "#30312F",
  ];

  // useEffect till currentIndex reaches 5
  useEffect(() => {
    if (currentIndex === 6) {
      return; // Exit the useEffect if currentIndex reaches 5
    }
  
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 700);
    console.log("current index : "+currentIndex);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  // useEffect for count till 100
  useEffect(() => {
    if (count === 100) {
      return; // Exit the useEffect if count reaches 100
    }
    const timeout = setTimeout(() => setCount((prevCount) => prevCount + 1), 70);
    console.log(count)

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <>
      <div className={Styles.preloader}>
        <section className={Styles.carousel_section}>
          <div
            className={Styles.carousel_wrapper}
            style={{
              transform: `translateX(-${currentIndex}00vw)`,
            }} 
          >
            {name.map((letter, index) => {
              return (
                <>
                  <div
                    className={Styles.letter_div}
                    key={index}
                    style={{ backgroundColor: colors[index] }}
                  >
                    {letter}
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section className={Styles.text_reveal}>
          <section className={Styles.name_wrapper}>
              <h1> ''Passionate </h1>
          </section>
          <section className={Styles.second_line_wrapper}>
            <h1>About Every</h1>
          </section>
          <section className={Styles.pixels_text_wrapper}>
            <h1>Pixels''</h1>
          </section>
        </section>

        <section className={Styles.top_section}>
          <section className={Styles.percentage_loader}>
            <p>{count} %</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Preloader;
