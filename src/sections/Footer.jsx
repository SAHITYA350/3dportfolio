import { socialImgs } from "../constants";

// ✅ Your social links (replace with real URLs)
const socialLinks = {
  insta: "https://www.instagram.com/sahityaghosh_350/",
  fb: "https://www.facebook.com/share/14HYnK6jM1H/",
  x: "https://twitter.com/SahityaGbcx",
  linkedin: "https://www.linkedin.com/in/sahitya-ghosh-9ba098292/",
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 via-zinc-950 to-black py-10 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand / Terms */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60 hover:text-white cursor-pointer transition-colors">
              Terms & Conditions
            </p>
          </div>

          {/* Social Icons */}
          

       <div className="flex items-center gap-6">
  {socialImgs.map((socialImg, index) => (
    <a
      key={index}
      href={socialLinks[socialImg.name.toLowerCase()] || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 rounded-full bg-white/5 backdrop-blur-md 
                 hover:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
                 transition-all duration-500 ease-out transform hover:scale-110"
      aria-label={`Visit my ${socialImg.name}`}
    >
      {/* Hover glow ring */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 transition duration-500"></span>
      
      {/* Actual icon image */}
      <img
        src={socialImg.imgPath}   // 👈 loads your PNG file
        alt={`${socialImg.name} icon`}
        className="relative w-5 h-5 md:w-6 md:h-6 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
      />
    </a>
  ))}
</div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} <span className="text-white font-medium">Sahitya Ghosh</span>. All rights reserved.
          </p>

          <p className="text-sm text-white/60">
            Designed & Built with <span className="text-pink-400">❤️</span> using{" "}
            <span className="font-medium text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              React & TailwindCSS
            </span>
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

