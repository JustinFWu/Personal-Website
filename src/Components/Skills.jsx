import { BiLogoCPlusPlus, BiLogoGit, BiLogoGithub, BiLogoPython, BiLogoReact } from "react-icons/bi";
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
        className="text-4xl font-light text-white md:text-6xl">Skills</motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoPython className="cursor-pointer text-[80px] text-[#3776AB] transition-all duration-300 hover:-translate-y-5 
              sm:text-[100px] md:text-[120px]"/>
          </motion.div>  

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoCPlusPlus className="cursor-pointer text-[80px] text-[#00599C] transition-all duration-300 hover:-translate-y-5 
              sm:text-[100px] md:text-[120px]"/>   
          </motion.div>          

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoReact className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 
              sm:text-[100px] md:text-[120px]"/>   
          </motion.div>          

          <motion.div
            variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}
          >
              <BiLogoGit className="cursor-pointer text-[80px] text-[#F05032] transition-all duration-300 hover:-translate-y-5 
              sm:text-[100px] md:text-[120px]"/>   
          </motion.div>      

        </div>
    </div>
  )
}

export default Skills