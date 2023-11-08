import { useSpring, useScroll, animated } from "react-spring";
import Styles from "../styles/Pormotion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Promotion = () => {
  const { scrollY } = useScroll();

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 450 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 450 ? "translateY(0px)" : "translateY(200px)"
    ),
    config: { mass: 1, tension: 120, friction: 14, duration: 500 },
  });

  const animation2 = useSpring({
    opacity: scrollY.to((y) => (y > 450 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 450 ? "translateY(0px)" : "translateY(25px)"
    ),
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animation3 = useSpring({
    opacity: scrollY.to((y) => (y > 650 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 650 ? "translateX(0px)" : "translateX(-50px)"
    ),
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <>
      <div className={Styles.about_header}>
       
        <h1 className={Styles.client_text_header}>
        <section className={Styles.left_text_wrapper}>
          <animated.p style={animation}>
            I'll Make your <br /> <em> dream website </em>
            <br />
            <b> live! </b>
          </animated.p>
</section>
        </h1>
        <div style={animation} className={Styles.contact_section}>
          <animated.p style={animation2}>let's build your website</animated.p>

          <animated.button
            style={animation2}
            class={Styles.contact_button}
            role="button"
          >
            <span class={Styles.text}>
              <h2 className={Styles.contact_text}>
                <Link href="mailto:contact@aniketpatel.me" target="_blank">
                  Contact Me
                </Link>
                </h2>
            </span>
            <span> <Link href="mailto:contact@aniketpatel.me" target="_blank">
                  Make It Happen
                </Link></span>
          </animated.button>

          <animated.div style={animation} className={Styles.social_link}>
            <span>
              {" "}
              <Link href="https://github.com/Aniket-Patel-swg" target="_BLANK">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="https://www.instagram.com/aniketpatel0412" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link
                href="https://www.linkedin.com/in/aniket-patel-developer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
            </span>
          </animated.div>
        </div>
      </div>
      <div className={Styles.Service_cards}>
        <animated.section style={animation2}>
          <animated.div style={animation3} className={Styles.service_wrapper}>
            WebSite Design
          </animated.div>
        </animated.section>
        <animated.section style={animation2}>
          <animated.div style={animation3} className={Styles.service_wrapper}>
            Website Development
          </animated.div>
        </animated.section>{" "}
        {/* <animated.section>
            Branding
          </section> */}
        .
      </div>

      <section className={Styles.coming_soon}>
        under construction, comming soon... here is my{" "}
        <Link href="./Resume.pdf" target="_BLANK">Resume</Link>
      </section>
    </>
  );
};

export default Promotion;
