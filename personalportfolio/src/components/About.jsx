import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import style from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return <p>{title}</p>;
};
const About = () => {
  return (
    <div className="m-4 ml-8">
      <motion.div variants={textVariant()} className="">
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl ${style.sectionSubText}`}
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 text-white">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
