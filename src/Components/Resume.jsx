import { motion } from "motion/react"
import { BsDownload, BsEnvelope, BsGeoAlt, BsLinkedin, BsGithub, BsTelephone } from "react-icons/bs"

function Resume() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[900px] rounded-2xl border border-zinc-900 bg-zinc-950/60 p-8 md:p-14 backdrop-blur-sm"
      >
        {/* Header */}
        <header className="mb-10 border-b border-zinc-900 pb-8">
          <h1 className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent text-4xl font-light tracking-tight md:text-5xl">
            Justin Feng Wu
          </h1>
          <p className="mt-2 text-lg font-light text-zinc-400">
            Computer Science Student · University of Adelaide
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <BsGeoAlt size={13} /> Adelaide, SA
            </span>
            <a href="tel:+61451167266" className="flex items-center gap-2 transition-colors hover:text-zinc-200">
              <BsTelephone size={13} /> +61 451 167 266
            </a>
            <a href="mailto:justinfengwu@gmail.com" className="flex items-center gap-2 transition-colors hover:text-zinc-200">
              <BsEnvelope size={13} /> justinfengwu@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/justinfwu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-zinc-200">
              <BsLinkedin size={13} /> linkedin.com/in/JustinFWu
            </a>
            <a href="https://github.com/JustinFWu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-zinc-200">
              <BsGithub size={13} /> github.com/JustinFWu
            </a>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-zinc-400">
            Graduate SWE at InsightFactory.ai, developing and maintaining the internal data platform and
            data pipelines, with a focus on building reliable, scalable backend systems. Passionate
            about creating impactful solutions and contributing to real-world applications.
          </p>
        </Section>

        {/* Work History */}
        <Section title="Work History">
          <Entry
            title="Tutor"
            org="Elite Wings Education"
            location="Adelaide, SA"
            date="03.2023 — Current"
            details={[
              "Assist students in mathematics, C++, MATLAB, and object-oriented programming principles.",
              "Tutor small groups of 5-10 students and one-on-one from year 4 to university second year.",
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <Entry
            title="Bachelor of Computer Science (Advanced)"
            org="University of Adelaide"
            location="South Australia"
            date="02.2023 — 11.2025"
            details={["Current GPA: 6.688 / 7.0"]}
          />
          <Entry
            title="International Baccalaureate"
            org="Pembroke School"
            location="Adelaide, South Australia"
            date="02.2020 — 11.2022"
            details={["Final Score: 43/45  ·  ATAR: 99.45"]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "Python",
              "C++",
              "SQL",
              "Bash",
              "Git",
              "HTML & CSS",
              "MATLAB",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            All at intermediate proficiency or above compared to professionals.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Bilingual (English & Mandarin) · Effective interpersonal communication
          </p>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Entry
            title="Volunteer Management Web Application"
            details={[
              "Developed a full-stack web application as part of a group project, enabling volunteering clubs to manage and track members efficiently.",
              "Utilised Node.js and Express for the backend and Vue.js for the frontend, creating a seamless and responsive user experience.",
            ]}
            tags={["Node.js", "Express", "Vue.js"]}
          />
          <Entry
            title="LLM-based NPC with Emotion Detection"
            details={[
              "Developed an NPC simulation chatbot powered by OpenAI's large language model, integrating emotion detection, speech-to-text (Whisper API), and voice cloning to enhance realism and interactivity.",
              "Explores retrieval-augmented generation (RAG) to improve contextual accuracy and emotional responsiveness, creating a more immersive NPC experience.",
            ]}
            tags={["OpenAI", "Whisper", "RAG", "Python"]}
          />
        </Section>

        {/* Interests */}
        <Section title="Interests">
          <p className="text-sm text-zinc-400">
            Investing and Financial Management · Photography · Reading · Bouldering
          </p>
        </Section>

        {/* Download button */}
        <div className="mt-12 flex justify-center border-t border-zinc-900 pt-10">
          <a
            href={`${import.meta.env.BASE_URL}assets/JustinWu_resume_04.24 1.docx`}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
          >
            <BsDownload size={14} /> Download as .docx
          </a>
        </div>
      </motion.div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Entry({ title, org, location, date, details, tags }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="font-medium text-zinc-100">{title}</h3>
          {org && (
            <p className="text-sm text-zinc-400">
              {org}
              {location && <span className="text-zinc-600"> · {location}</span>}
            </p>
          )}
        </div>
        {date && <span className="shrink-0 text-xs text-zinc-500">{date}</span>}
      </div>
      {details && (
        <ul className="mt-2 space-y-1.5 pl-0 text-sm text-zinc-400">
          {details.map((item, i) => (
            <li
              key={i}
              className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-zinc-600"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Resume
