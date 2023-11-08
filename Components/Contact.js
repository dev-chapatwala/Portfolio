import React, { useState } from "react";
import Styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, useScroll, animated } from "react-spring";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [phoneNumber, setPhoneNumber] = useState();
  const [isTypingPhoneNumber, setIsTypingPhoneNumber] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNumberInput = () => {};

  const { scrollY } = useScroll();

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 3305 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 3305 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 60, friction: 13 },
  });

  const animation2 = useSpring({
    opacity: scrollY.to((y) => (y > 3495 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 3495 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 60, friction: 13 },
  });

  const linkAnimation = useSpring({
    opacity: scrollY.to((y) => (y > 3575 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 3575 ? "translateY(10px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 60, friction: 13 },
  });

  function handleSubmit() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    setSuccessMessage('Message Sent successfully!')
    if (!name || !email) {
      alert("Name and email are required fields. ");
      setSuccessMessage('')
      return;
    }

    // Proceed with form submission
    // You can perform any additional logic or API calls here
  }

  return (
    <>
      <div className={Styles.contact_section}>
        <div className={Styles.left_contact_section}>
          <section className={Styles.contact_text_wrapper}>
            <animated.h1 style={animation}>Contact me</animated.h1>
          </section>
          <section className={Styles.line_break_wrapper}>
            <animated.h1 style={animation}>Here </animated.h1>
          </section>

          <section className={Styles.contact_email_wrapper}>
            <animated.h4 style={animation2}>Email</animated.h4>
            <animated.p style={animation2} target="_BLANK">
              <a href="mailto::contact@aniketpatel.me">
                Contact@aniketpatel.me
              </a>
            </animated.p>
          </section>
          <div className={Styles.social_link}>
            <animated.span style={linkAnimation}>
              {" "}
              <Link href="https://github.com/Aniket-Patel-swg" target="_BLANK">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </Link>
            </animated.span>
            <animated.span style={linkAnimation}>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </animated.span>
            <animated.span style={linkAnimation}>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
            </animated.span>
            <animated.span style={linkAnimation}>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </Link>
            </animated.span>
            <animated.span style={linkAnimation}>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </Link>
            </animated.span>
          </div>
        </div>
        <div></div>

        <div className={Styles.right_contact_section}>
          <section className={Styles.contact_name_section}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </section>
          <section className={Styles.contact_email_section}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </section>
          <section className={Styles.conact_two_section}>
            <div className={Styles.contact_number_section}>
              {/* <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Number"
              /> */}
              <PhoneInput
                value={phoneNumber}
                onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                className={Styles.phone_input}
                placeholder="Country Code First"
              />
              {/* {phoneNumber && isValidPhoneNumber(phoneNumber) ? "" : "Phone Number is not valid"} */}
            </div>
            <div className={Styles.contact_subject_section}>
              <div>
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value="">Subject</option>
                  <option value="development">Website Development</option>
                  <option value="branding">Branding</option>
                  <option value="design">Website Design</option>
                  <option value="all">Make My brand from scratch</option>
                  <option value="all">Update my website</option>
                  <option value="other">Other</option>x
                </select>
              </div>
            </div>
          </section>
          <section className={Styles.contact_message_section}>
            <textarea
              name="message"
              id="message"
              cols="35"
              rows="5"
              placeholder="Drop me an message"
            ></textarea>
          </section>
          {successMessage && (
          <div className={Styles.success_message}>{successMessage}</div>
        )}
          <div className={Styles.submit_button} onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
