import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import Button1 from '../components/Button/Button';
const Hero = () => {

useGSAP(() => {
  gsap.fromTo(
    ".hero-text h1 span", // Assumes each letter is wrapped in a <span>
    { y: 60, opacity: 0, scale: 0.9, filter: "blur(5px)", rotation: 5 }, // Add slight rotation
    { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)", 
      rotation: 0, 
      stagger: 0.05, // Tighter stagger for letter-by-letter effect
      duration: 1.4, 
      ease: "power4.out" // Ultra-smooth easing
    }
  );

  gsap.fromTo(
  ".group",
  {
    y: 34,
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.92,
  },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    duration: 1.3,
    ease: "power3.out",
  }
);
});

  return (
    <section id="hero" className="relative overflow-hidden heroimg">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                <span>S</span>
                <span>h</span>
                <span>a</span>
                <span>p</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            <h1>
    <span>i</span><span>n</span><span>t</span><span>o</span><span> </span>
    <span>R</span><span>e</span><span>a</span><span>l</span><span> </span>
    <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>
  </h1>
  <h1>
    <span>t</span><span>h</span><span>a</span><span>t</span><span> </span>
    <span>D</span><span>e</span><span>l</span><span>i</span><span>v</span><span>e</span><span>r</span><span> </span>
    <span>R</span><span>e</span><span>s</span><span>u</span><span>l</span><span>t</span><span>s</span>
  </h1>
            </div>


<div
  className="flex items-center gap-3 text-white md:text-xl font-medium relative z-10 pointer-events-none group"
>
  <div
    className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(236,72,153,0.45)]"
  >
    <div className="flex items-center justify-center w-full h-full rounded-xl bg-[#0f172a] shadow-[0_2px_8px_rgba(59,130,246,0.14)]">
      <img
        src="/hand-waving-hand.gif"
        alt="hi"
        className="w-7 h-7 animate-bounce"
        style={{ filter: 'drop-shadow(0 0 8px #a78bfa)' }}
      />
    </div>
  </div>
  <span
    className="text-white transition-colors duration-300 hover:text-gray-100 focus:text-gray-200 focus:outline-none"
    style={{
      letterSpacing: '0.04em',
      transition: 'color 0.3s, text-shadow 0.3s',
      textShadow:
        '0 2px 24px #a78bfa77, 0 0px 12px #ec489980',
    }}
  >
    I’m <span className="font-bold hover:tracking-[2px] transition-all duration-300">Sahitya Ghosh</span> — Still learning. Always growing. 🚀
  </span>
</div>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />

          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout pointer-events-none -top-2">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
