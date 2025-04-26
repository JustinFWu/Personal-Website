import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return <>
    <div className="fixed min-h-screen w-full top-0 z-[-10] h-screen w-screen 
    bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'> 
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  </>
}

export default App
