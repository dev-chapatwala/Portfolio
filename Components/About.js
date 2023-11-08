import React from "react";
import Image from "next/image";
import Styles from "../styles/About.module.css";
import { useSpring, useScroll, animated, to } from "react-spring";

const About = () => {

  const { scrollY } = useScroll();

  const Images = [
    "/Images/about_.jpeg",

    "/about-img.jpg",

    "/Images/about_3_pic.jpeg",
  ];

  const springAnimation = useSpring({
    opacity: scrollY.to((y) => (y > 2900 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2900 ? "translateX(0px)" : "translateX(-100px)"
    ),
    config: { mass: 1, tension: 120, friction: 10 },
  });




  const springAnimation2 = useSpring({
    opacity: scrollY.to((y) => (y > 2900 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2900 ? "translateX(0px)" : "translateX(-100px)"
    ),
    config: { mass: 1, tension: 120, friction: 10 },
    delay: 1000,
  });

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 2250 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2250 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 80, friction: 15 },
  });

  const textReveal1 = useSpring({
    opacity: scrollY.to((y) => (y > 2600 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2600 ? "translateY(0px)" : "translateY(50px)"
    ),
    config: { mass: 1, tension: 80, friction: 15 },
  });

  const textReveal2 = useSpring({
    opacity: scrollY.to((y) => (y > 2650 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2650 ? "translateY(0px)" : "translateY(50px)"
    ),
    config: { mass: 1, tension: 80, friction: 15 },
  });

  const textReveal3 = useSpring({
    opacity: scrollY.to((y) => (y > 2950 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2950 ? "translateY(0px)" : "translateY(50px)"
    ),
    config: { mass: 1, tension: 80, friction: 15 },
  })

  return (
    <>
      <div className={Styles.App}>
        <section className={Styles.About_me}>
          <section className={Styles.about_heading_wrapper}>
            <animated.h1 style={animation}>About Me</animated.h1>
          </section>
          <section className={Styles.about_text_wrapper}>
            <animated.p style={animation}>
              MY Design and development background informs ideation to design through
              implementation. Currently in 3rd year pursuing computer science and engineering, with 
              a foucs on software development. 
              <br /> <br />
              I can plan, design, build, launch and maintain a website myself. I have worked on 
              10+ website development project for my clients and for my university, leveraging the 
              power of react JS and CSS. 
            </animated.p>
          </section>
        </section>
        <div className={Styles.container}>
          <div className={Styles.item}>
            <div className={Styles.item_header}>
              <section className={Styles.self_taught_wrapper}>
                <animated.div
                  style={textReveal1}
                  className={Styles.item_header_heading}
                >
                  Self Taught
                </animated.div>
              </section>
              <section className={Styles.experience_wrapper}>
                <animated.div
                  style={textReveal2}
                  className={Styles.item_header_heading2}
                >
                  Experienced
                </animated.div>
              </section>
            </div>
            <div className={Styles.item_image}>
              <animated.img
                style={springAnimation}
                src={Images[2]}
                alt="About Image"
                layout="fill"
              />
            </div>
            <div className={Styles.item_footer}>
              <animated.div style={textReveal3} className={Styles.item_footer_quote}>
                Developer & Designer!
              </animated.div>
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.item_header}>
              <section className={Styles.explorer_wrapper}>
                <animated.div style={textReveal1} className={Styles.item_header_heading}>Explorer</animated.div>
              </section>
              <section className={Styles.tinkerer_wrapper}>
                <animated.div style={textReveal2} className={Styles.item_header_heading2}>Tinkerer</animated.div>
              </section>
            </div>
            <div className={Styles.item_image}>
              <animated.img
                style={springAnimation2}
                src={Images[1]}
                alt="About Image"
                layout="fill"
              />
            </div>
            <div className={Styles.item_footer}>
              <animated.div style={textReveal3} className={Styles.item_footer_quote}>
                Exploring Computer Science!
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
