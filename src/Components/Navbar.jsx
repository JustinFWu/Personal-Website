import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => setIsOpen(false);

    const linkClass = "cursor-pointer text-zinc-400 transition-all duration-300 hover:text-zinc-100"
    const activeClass = "cursor-pointer text-zinc-100 transition-all duration-300"

    return (
        <nav className="fixed top-0 z-[10] flex w-full items-center
        justify-center border-b border-b-zinc-900 bg-black/80 px-6 md:px-16
        py-6 text-zinc-100 backdrop-blur-md">

            <div className="flex w-full max-w-[1100px] items-center justify-between md:justify-center md:gap-16">

                <ul className="hidden md:flex gap-10">
                    {isHome ? (
                        <>
                            <a href="#home" className={linkClass}><li>Home</li></a>
                            <a href="#skills" className={linkClass}><li>Skills</li></a>
                            <a href="#projects" className={linkClass}><li>Projects</li></a>
                            <a href="#contact" className={linkClass}><li>Contact</li></a>
                        </>
                    ) : (
                        <Link to="/" className={linkClass}><li>Home</li></Link>
                    )}
                    <Link to="/resume" className={location.pathname === "/resume" ? activeClass : linkClass}>
                        <li>Resume</li>
                    </Link>
                </ul>

                <ul className="hidden md:flex gap-6 md:ml-8">
                    <li className="cursor-pointer text-xl text-zinc-400 transition-all duration-300 hover:text-zinc-100">
                        <a href="https://www.linkedin.com/in/justinfwu/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    </li>
                    <li className="cursor-pointer text-xl text-zinc-400 transition-all duration-300 hover:text-zinc-100">
                        <a href="https://github.com/JustinFWu" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                    </li>
                </ul>

                <div className="md:hidden ml-auto">
                    {isOpen ? (
                        <BiX className="block text-4xl text-zinc-100" onClick={menuOpen}/>
                    ) : (
                        <BiMenu className="block text-4xl text-zinc-100" onClick={menuOpen}/>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l
                border-zinc-900 bg-black/95 p-12 md:hidden">
                    <ul className="flex flex-col gap-8">
                        {isHome ? (
                            <>
                                <a href="#home" onClick={closeMenu} className={linkClass}><li>Home</li></a>
                                <a href="#skills" onClick={closeMenu} className={linkClass}><li>Skills</li></a>
                                <a href="#projects" onClick={closeMenu} className={linkClass}><li>Projects</li></a>
                                <a href="#contact" onClick={closeMenu} className={linkClass}><li>Contact</li></a>
                            </>
                        ) : (
                            <Link to="/" onClick={closeMenu} className={linkClass}><li>Home</li></Link>
                        )}
                        <Link to="/resume" onClick={closeMenu} className={linkClass}><li>Resume</li></Link>
                    </ul>

                    <ul className="flex flex-wrap gap-5">
                        <li className="cursor-pointer text-xl text-zinc-400 transition-all duration-300 hover:text-zinc-100">
                            <a href="https://www.linkedin.com/in/justinfwu/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        </li>
                        <li className="cursor-pointer text-xl text-zinc-400 transition-all duration-300 hover:text-zinc-100">
                            <a href="https://github.com/JustinFWu" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                        </li>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar
