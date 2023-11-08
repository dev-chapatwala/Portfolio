import React, { useState, useEffect } from "react";
import Styles from "../styles/Hero.module.css";
import { animated, useSpring } from "react-spring";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Cyber enthusiast",
    "Public Speaking",
    "entrepreneurship",
    "Business Management",
    "Fitness"
  ];

  // useEffect for autotyping
  useEffect(() => {
    const handleType = () => {
      const currentWord = loopNum % words.length;
      const fullText = words[currentWord];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((loopNum) => loopNum + 1);
      }

      let typingSpeedModifier = 1;

      if (isDeleting) {
        typingSpeedModifier /= 2;
      }

      setTypingSpeed(fullText.length * 15 * typingSpeedModifier);
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log('Scroll position:', scrollY);

  // spring animation for name
  const nameAnimation = useSpring({
    config: {
      duration: 900,
      tension: 320,
      friction: 10,
    },
    from: {
      opacity: 0,
      transform: "translateY(110px)",
      // transform: 'skew(-90deg)',
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
      // transform: 'skew(0deg)'
    },
  });

  const RoleAnimation = useSpring({
    config: {
      duration: 700,
      tension: 320,
      friction: 10,
      delay: 2100
    },
    from: {
      opacity: 0,
      transform: "translateY(-110px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  });

  const animation = useSpring({
    config: {
      duration: 700,
      tension: 320,
      friction: 30,
    },
    from: {
      opacity: 0,
      transform: "translateY(65px)",
    },
    to: {
      opacity: 1,
      transform: "tranlateY(0px)",
    },
  });

  return (
    <>
      <div className={Styles.hero_section}>
        <div className={Styles.upper_headline}>
          <span>
            <section className={Styles.protfolio_wrapper}>
              <animated.p style={animation}>
                {" "}
                {"{" + "Portfolio" + "}"}
              </animated.p>
            </section>
          </span>

          <h1 className={Styles.name_heading}>
            <section className={Styles.name_wrapper}>
              <animated.p style={nameAnimation}>Aniket Patel</animated.p>
            </section>
          </h1>
        </div>
        <div className={Styles.bottom_headline}>
          <h2 className={Styles.work_heading}>
            {" "}
            <section className={Styles.work_wrapper}>
              <animated.p style={RoleAnimation}>
                Web Developer & Designer
              </animated.p>
            </section>
          </h2>
          <span className={Styles.location}>({text})</span>
        </div>

        {/* <div className={Styles.dummy}>
          <p>scroll Position : {scrollY}</p>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
