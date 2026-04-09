import { BiLogoCPlusPlus, BiLogoGit, BiLogoGithub, BiLogoPython, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { SiSharp } from "react-icons/si";
import {motion} from "motion/react"

function Skills() {

  const variants = {
      hidden:{opacity:0, y:50},
      visible:{opacity:1, y:0}
  }

  return (
    <div id="skills" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
        <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-zinc-100 md:text-6xl">Skills</motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoPython className="cursor-pointer text-[80px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoCPlusPlus className="cursor-pointer text-[80px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoReact className="cursor-pointer text-[80px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoTypescript className="cursor-pointer text-[80px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <SiSharp className="cursor-pointer text-[70px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[90px] md:text-[110px]"/>
          </motion.div>

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoGit className="cursor-pointer text-[80px] text-zinc-400 transition-all duration-300 hover:-translate-y-5 hover:text-zinc-100
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>

        </div>
    </div>
  )
}

export default Skills
