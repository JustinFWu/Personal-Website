import {motion} from "motion/react"

const projectsData =[
  {
    title: "BERT + CNN Sentiment Analysis on Educator Views of AI",
    description: "Fine-tuned a BERT model with an additional CNN layer to perform sentiment analysis on Facebook comments, investigating how teachers perceive the role of AI in education. The hybrid architecture leverages BERT's contextual embeddings alongside convolutional feature extraction to better capture the nuanced, often informal language found in public social media discussion.",
    Technologies: ["Python", "PyTorch", "BERT", "CNN", "NLP"],
  },
  {
    title: "LLM-based NPC with Emotion Detection",
    description: "Developed an NPC simulation chatbot powered by OpenAI's large language model, integrating emotion detection, speech-to-text (Whisper API), and voice cloning to enhance realism and interactivity. Explores retrieval-augmented generation (RAG) to improve contextual accuracy and emotional responsiveness, creating a more immersive NPC experience.",
    Technologies: ["Python", "OpenAI", "Whisper", "RAG"],
  },
  {
    title: "Volunteer Management Web Application",
    description: "Developed a full-stack web application as part of a group project, enabling volunteering clubs to manage and track members efficiently. Built with Node.js and Express on the backend and Vue.js on the frontend, creating a seamless and responsive user experience.",
    Technologies: ["Node.js", "Express", "Vue.js"],
  },]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 100, y: 0}}
    viewport={{once: false, amount: 0.2}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      {/* potentially an image here */}

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold text-zinc-100">{project.title}</div>
          <p className="text-zinc-500">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.Technologies.map((tech, index) => (
              <span key={index} className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                {tech}
              </span>
            ))
          }
        </div>

      </div>
    </div>
    </ScrollReveal>
  )
}

function Projects() {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center
    justify-center gap-16 p-4 md:px-14 md:py-24 ">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-zinc-100 md:text-6xl"> My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-zinc-100">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
