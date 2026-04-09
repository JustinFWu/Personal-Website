import { motion } from "motion/react"

function Hero() {
  return (
    <div id="home" className="px-16 flex min-h-screen  w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-zinc-100">
        <div>
          {/* some sort of logo or animation */}
        </div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 100}}
        transition={{duration: 0.8, delay: 0.2}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-5 text-center">
          <h1 className="bg-gradient-to-r from-white to-zinc-500
            bg-clip-text text-transparent text-5xl font-light leading-tight md:text-7xl ">Justin Feng Wu</h1>
          <h3 className="text-zinc-400 text-2xl md:text-3xl font-light tracking-wide">Computer Science</h3>
          <p className="md:text-base text-pretty text-sm text-zinc-500">Graduate SWE at InsightFactory.ai, building and maintaining in-house data platforms and pipelines.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
