import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "motion/react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi";

const HOME_SECTIONS = ["home", "skills", "projects", "contact"];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isResume = location.pathname === "/resume";

    const menuOpen = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        closeMenu();
    };

    useEffect(() => {
        if (!isHome) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        const elements = HOME_SECTIONS
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [isHome]);

    const baseItem = "relative cursor-pointer transition-colors duration-300";
    const idleText = "text-zinc-400 hover:text-zinc-100";
    const activeText = "text-zinc-100";

    const NavItem = ({ id, label, onClick, isActive }) => (
        <li
            onClick={onClick}
            className={`${baseItem} ${isActive ? activeText : idleText}`}
        >
            {label}
            {isActive && (
                <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-zinc-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </li>
    );

    return (
        <nav className="fixed top-0 z-[10] flex w-full items-center
        justify-center border-b border-b-zinc-900 bg-black/80 px-6 md:px-16
        py-6 text-zinc-100 backdrop-blur-md">

            <div className="flex w-full max-w-[1100px] items-center justify-between md:justify-center md:gap-16">

                <ul className="hidden md:flex gap-10">
                    {isHome ? (
                        <>
                            <NavItem
                                id="home"
                                label="Home"
                                onClick={() => scrollToSection("home")}
                                isActive={activeSection === "home"}
                            />
                            <NavItem
                                id="skills"
                                label="Skills"
                                onClick={() => scrollToSection("skills")}
                                isActive={activeSection === "skills"}
                            />
                            <NavItem
                                id="projects"
                                label="Projects"
                                onClick={() => scrollToSection("projects")}
                                isActive={activeSection === "projects"}
                            />
                            <NavItem
                                id="contact"
                                label="Contact"
                                onClick={() => scrollToSection("contact")}
                                isActive={activeSection === "contact"}
                            />
                        </>
                    ) : (
                        <Link to="/" className={`${baseItem} ${idleText}`}>
                            <li>Home</li>
                        </Link>
                    )}
                    <Link to="/resume" className={`${baseItem} ${isResume ? activeText : idleText}`}>
                        <li className="relative">
                            Resume
                            {isResume && (
                                <motion.span
                                    layoutId="activeNavUnderline"
                                    className="absolute -bottom-2 left-0 right-0 h-px bg-zinc-100"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </li>
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
                                <li onClick={() => scrollToSection("home")} className={`${baseItem} ${activeSection === "home" ? activeText : idleText}`}>Home</li>
                                <li onClick={() => scrollToSection("skills")} className={`${baseItem} ${activeSection === "skills" ? activeText : idleText}`}>Skills</li>
                                <li onClick={() => scrollToSection("projects")} className={`${baseItem} ${activeSection === "projects" ? activeText : idleText}`}>Projects</li>
                                <li onClick={() => scrollToSection("contact")} className={`${baseItem} ${activeSection === "contact" ? activeText : idleText}`}>Contact</li>
                            </>
                        ) : (
                            <Link to="/" onClick={closeMenu} className={`${baseItem} ${idleText}`}><li>Home</li></Link>
                        )}
                        <Link to="/resume" onClick={closeMenu} className={`${baseItem} ${isResume ? activeText : idleText}`}><li>Resume</li></Link>
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
