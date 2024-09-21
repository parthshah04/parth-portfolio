import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#F9744C]`}>
          My technical skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#D94E28]`}>
          Technologies.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-20 flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 rounded-full bg-[#EFEFEF] flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="absolute bottom-[-20px] text-[#D94E28] text-[14px] font-medium">
              {/* {technology.name} */}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
