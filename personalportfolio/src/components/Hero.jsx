import { motion } from "framer-motion";

import style from "../style";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-black`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${style.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yash</span>
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I am a reactjs developer, <br className="sm:block hidden" />
            knows tailwind, javascript,redux and firebase
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
