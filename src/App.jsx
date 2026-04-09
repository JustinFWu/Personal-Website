import { Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Resume from './Components/Resume'

function Home() {
  return (
    <>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

function App() {

  return <>
    <div className="fixed min-h-screen w-full top-0 z-[-10] h-screen w-screen
    bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.06),rgba(0,0,0,0))]"></div>
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  </>
}

export default App
