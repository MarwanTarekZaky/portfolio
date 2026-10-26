import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast';
import Confetti from 'react-confetti';
import ReCAPTCHA from "react-google-recaptcha"; // <-- NEW

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WEB3FORMS_ACCESS_KEY } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons";

// How messages reach EMAIL, in order of preference:
//  1. Web3Forms (https://web3forms.com) when WEB3FORMS_ACCESS_KEY is set in
//     src/constants/index.js. The key is public by design (safe in client code).
//  2. EmailJS when its three VITE_EMAILJS_* variables are set in Vercel.
//  3. FormSubmit (https://formsubmit.co) as a last resort.
// If sending fails, the visitor gets a one-click "send by email" fallback,
// so a message is never lost.
const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  key: import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN,
};

const postJson = async (url, payload, timeoutMs = 15000) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } finally {
    clearTimeout(timer);
  }
};

const sendMessage = async ({ name, email, message }) => {
  const subject = `Portfolio message from ${name}`;
  if (WEB3FORMS_ACCESS_KEY) {
    const { res, data } = await postJson("https://api.web3forms.com/submit", {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Portfolio contact form",
      name,
      email,
      message,
    });
    if (!res.ok || data.success !== true) {
      throw new Error(data.message || data?.body?.message || `Web3Forms HTTP ${res.status}`);
    }
    return data;
  }
  if (EMAILJS.service && EMAILJS.template && EMAILJS.key) {
    return emailjs.send(
      EMAILJS.service,
      EMAILJS.template,
      { from_name: name, to_name: "Marwan Tarek Zaky", from_email: email, to_email: EMAIL, message },
      EMAILJS.key
    );
  }
  const { res, data } = await postJson(`https://formsubmit.co/ajax/${EMAIL}`, {
    name,
    email,
    message,
    _replyto: email,
    _subject: subject,
    _template: "table",
    _captcha: "false",
  });
  if (!res.ok || String(data.success) !== "true") {
    throw new Error(data.message || `FormSubmit HTTP ${res.status}`);
  }
  return data;
};

const mailtoFor = ({ name, email, message }) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}` +
  `&body=${encodeURIComponent(`${message}\n\n${name}\n${email}`)}`;

const Contact = () => {
  const formRef = useRef();
  const captchaRef = useRef(); // <-- NEW
  const [captchaToken, setCaptchaToken] = useState(null); // <-- NEW
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fallbackHref, setFallbackHref] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "";
    }

    return () => {
      document.body.style.overflowX = "";
    };
  }, [showConfetti]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: 'bottom-right',
      });
      return;
    }

    if (!captchaToken) {
      toast("Hold up! Gotta make sure you're not a spam bot, checkmark the CAPTCHA! 🧠🤖", {
        icon: '🛡️',
        duration: 3500,
        position: 'bottom-right',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.", {
        duration: 3000,
        position: 'bottom-right',
      });
      return;
    }

    // Spam bots fill every field, including the hidden one.
    if (formRef.current?.elements?._honey?.value) return;

    setLoading(true);
    setFallbackHref(null);

    sendMessage(form)
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: 'bottom-right',
          });
          setShowConfetti(true);
          setCaptchaToken(null);
          captchaRef.current.reset(); // reset captcha after submit
          setTimeout(() => {
            setSuccess(false);
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFallbackHref(mailtoFor(form));
          toast.error(
            "The message could not be sent automatically. Use the email button below instead.",
            { duration: 6000, position: 'bottom-right' }
          );
          setCaptchaToken(null);
          captchaRef.current?.reset();
        }
      );
  };

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false);
  }, []);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}
    >
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-purple-500 hover:text-purple-400 transition-colors duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {PHONE_DISPLAY}
          </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-4 text-secondary text-[16px]">
          Email me at{" "}
          <a href={`mailto:${EMAIL}`} className="text-purple-400 hover:text-purple-300 underline">{EMAIL}</a>{" "}
          or send a message below.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-purple-500 mr-2"
                  />{" "}
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-purple-500 mr-2"
                  />{" "}
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <FontAwesomeIcon
                icon={faComment}
                className="text-purple-500 mr-2"
              />{" "}
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Marwan, I'd like to chat about some opportunities you might like! "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
            />
          </label>

          {/* 🤖 CAPTCHA Field */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              theme="dark"
              ref={captchaRef}
            />
          </div>
          <span className="text-xs text-gray-400 text-center -mt-2">
            Protected by reCAPTCHA Enterprise. ⚔️
          </span>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : success ? (
              <span className="flex items-center">
                Sent Successfully
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </span>
            )}
          </button>

          {fallbackHref && (
            <div className="-mt-4 rounded-lg border border-purple-500/50 bg-tertiary p-4 text-center text-secondary text-[15px]">
              <p>Your message is still here. Send it with your email app in one click:</p>
              <a
                href={fallbackHref}
                className="mt-3 inline-block rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Send by email
              </a>
              <p className="mt-2 text-xs">or write to <a href={`mailto:${EMAIL}`} className="underline text-purple-300">{EMAIL}</a></p>
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
