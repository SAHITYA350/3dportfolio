import { logoIconsList } from "../constants";


const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center marquee-item transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-80 h-80 object-contain opacity-80 hover:opacity-100"
      />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative overflow-hidden">
    {/* Gradient edges */}
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

    {/* Marquee */}
    <div className="marquee h-52 flex items-center">
      <div className="marquee-box  flex gap-12 animate-marquee hover:[animation-play-state:paused]">
        {logoIconsList.concat(logoIconsList).map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
