
function Contact() {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent font-light">Get in Touch</span>
        </h1>

        <p className="text-center text-lg font-light text-zinc-500">
          Send me an E-mail through this button and I'll respond whenever I can.
        </p>

        <a href="mailto:justinfengwu@gmail.com" className="text-nowrap rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-3 text-lg font-medium
        text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900">Contact Me</a>
      </div>
    </div>
  )
}

export default Contact
