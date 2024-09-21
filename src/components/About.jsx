import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full orange-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#FFFFFF] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-[#D94E28] text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#F9744C]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#D94E28]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#D94E28] text-[17px] max-w-3xl leading-[30px]"
      >
        Results-driven Software Developer with over 3.5 years of experience in
        product and service-based startup environments, specializing in backend
        development and blockchain technologies. Proficient in designing
        scalable microservices architectures and implementing robust database
        management systems using Node.js, Express.js, MongoDB, and MySQL.
        Experienced in developing smart contracts, DeFi protocols, and NFTs,
        with a strong foundation in blockchain innovations. Demonstrated ability
        to lead complex projects, communicate effectively with clients, and
        collaborate seamlessly with cross-functional teams. Currently pursuing a
        Master of Applied Computing, committed to leveraging technical expertise
        and innovative mindset to drive impactful solutions in software
        development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
