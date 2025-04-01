import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from "sweetalert2";
import { follow } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:450px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name !== "" && form.email !== "") {
      setLoading(true);
      emailjs
        .send(
          "service_go8ivik",
          "template_c772kon",
          {
            from_name: form.name,
            to_name: "parthiban",
            from_email: form.email,
            to_email: "parthiabanraj922@gmail.com",
            message: form.message,
          },
          "uST7LSvZfIgWs4qNO"
        )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Thank you. I will get back to you as soon as possible.",
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          setLoading(false);
          console.log({ err });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! ${err.message}`,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Missing Fields!",
        text: "Name and Email are required!",
      });
    }
  };

  return (
    <div className="min-h-full flex flex-col gap-4 md:gap-10 px-4 md:px-8">
      {/* Form Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} 
        className="xs:flex-[-0.1] w-full md:w-fit flex-[0.3] p-6 md:px-8 md:py-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-8 md:mt-12 gap-4 md:gap-10 max-w-lg"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-cyan-600 py-3 px-6 outline-none w-fit text-black font-bold shadow-md shadow-cyan-300 rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Social Icons Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-wrap justify-center gap-8 md:gap-20 px-4"
      >
        {follow.map((me, index) => (
          <motion.img
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 cursor-pointer"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0, -20, 0],
              scale: [0.7, 1.2, 0.7],
              rotate: [0, 45, -45, 0],
            }}
            transition={{
              duration: 2,
              delay: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={me.icon}
            alt={me.name}
            onClick={() => window.open(me.link, "_blank")}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
