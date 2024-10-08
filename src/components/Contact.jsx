import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Twitter } from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Parth Shah",
          from_email: form.email,
          to_email: "psshah0411@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#FFFFFF] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-[#F9744C]`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-[#D94E28]`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#D94E28] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#EFEFEF] py-4 px-6 placeholder:text-[#F9744C] text-[#D94E28] rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#D94E28] font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-[#EFEFEF] py-4 px-6 placeholder:text-[#F9744C] text-[#D94E28] rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#D94E28] font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[#EFEFEF] py-4 px-6 placeholder:text-[#F9744C] text-[#D94E28] rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#D94E28] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#F9744C]"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/parthshah04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D94E28] hover:text-[#F9744C]"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-shah-72822816b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D94E28] hover:text-[#F9744C]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/_ParthShah__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D94E28] hover:text-[#F9744C]"
            >
              <Twitter size={24} />
            </a>
          </div>
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
