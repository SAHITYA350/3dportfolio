import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Logo */}
        <a href="#hero" className="logo relative group block w-16 h-16 md:w-20 md:h-20">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-[spin_6s_linear_infinite] opacity-75 group-hover:opacity-100 transition" />
          <img
            src="/images/Me.jpg"
            alt="Logo"
            className="relative w-full h-full rounded-full object-cover border-2 border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          
          <span className="absolute inset-0 rounded-full ring-2 ring-purple-500/40 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        {/* Desktop navigation */}
        <nav className="desktop hidden md:block">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav className={`mobile-nav md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a 
                  href={link} 
                  className="text-2xl font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{name}</span>
                  <span className="block h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </a>
              </li>
            ))}
          </ul>

          {/* Premium Contact Me button inside mobile menu */}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-12 px-8 py-3 text-lg font-semibold rounded-full 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-white shadow-xl
                       hover:scale-110 hover:shadow-pink-500/40 
                       transition duration-300 ease-out"
          >
            Contact Me
          </a>
        </nav>

        {/* Desktop contact button */}
        <a href="#contact" className="contact-btn group hidden md:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
