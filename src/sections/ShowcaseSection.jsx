import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full heroimg rounded-2xl ">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/p1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">


             <h2
  className="
    text-3xl md:text-4xl font-extrabold
    bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500
    bg-clip-text text-transparent
    drop-shadow-lg
    flex items-center gap-2
    animate-in fade-in slide-in heroimg
    "
>
  <span className="tracking-tight">
    OnlyChat <span className="font-black">Real Time Chat Application</span>
  </span>
</h2>
<p
  className="
    md:text-xl mt-2 text-shadow-transparent
    bg-gradient-to-r from-white/80 to-violet-200/70 bg-clip-text text-transparent
    font-medium
    backdrop-blur-md px-1.5 py-0.5 rounded-[0.7em]
    shadow-[0_2px_10px_rgba(36,99,235,0.12)]
    max-w-2xl
    transition duration-500
    animate-bounce
    "
>
  A real-time chat app 🗨️ built with <span className="font-semibold text-indigo-300">React</span>, <span className="font-semibold text-green-200">Node.js</span>, and <span className="font-semibold text-yellow-200">Socket.io</span> <span className="text-gray-400 font-normal">(MERN)</span>.
</p>



            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img
                  src="/images/p2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2 className="animate-bounce ">🧑‍🏭👨‍🏭👩‍🏭👷🏢 Magma Front Page UI Clone</h2>
              <p className="text-white-50 md:text-xl">
                <a href="https://lnkd.in/g9QcXaa8"> 🌐 View Project</a>
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img src="/images/p3.png" alt="YC Directory App" />
              </div>
              <h2 className="animate-bounce" >⛳🏌️🏌️‍♂️🥇 A fully #responsive UI clone of the SIDCUP Golf Family website</h2>
              <p className="text-white-50 md:text-xl">
                  <a href="https://lnkd.in/gQtAnitp"> 🌐 View Project</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
