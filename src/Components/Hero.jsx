import { motion } from "motion/react"

function Hero() {
  return (
    <div id="home" className="px-16 flex min-h-screen  w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div>
          {/* some sort of logo or animation */}
        </div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 100}}
        transition={{duration: 0.8, delay: 0.2}} 
        className="flex max-w-[600px] flex-col items-center justify-center gap-5 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500
            bg-clip-text text-transparent opacity-100 text-5xl font-light leading-tight md:text-7xl ">Justin Feng Wu</h1> 
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500
            bg-clip-text text-transparent opacity-100 text-2xl md:text-3xl ">Computer Science</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">As a third-year university student and aspiring software engineer, I am actively seeking graduate roles and internships where I can apply my academic knowledge 
            and self-developed skills to real-world challenges. I am eager to contribute to innovative projects, collaborate with experienced industry professionals, and 
            continuously develop my technical expertise in a dynamic environment.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero