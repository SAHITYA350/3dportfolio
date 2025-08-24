// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import TitleHeader from "../components/TitleHeader";
// import ContactExperience from "../components/models/contact/ContactExperience";

// const Contact = () => {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.sendForm(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       );

//       setForm({ name: "", email: "", message: "" });
//       alert("Message sent successfully!");
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
//     >
//       <div className="w-full max-w-7xl">
//         {/* Title Header */}
//         <TitleHeader
//           title="Get in Touch – Let's Connect"
//           sub="💬 Have questions or ideas? Let's talk! 🚀"
//         />

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
//           {/* Form Section */}
//           <div className="lg:col-span-5 col-span-12">
//             <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700/50 transition-all duration-300 hover:shadow-2xl">
//               <form
//                 ref={formRef}
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-5 md:gap-6"
//               >
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="name"
//                     className="text-sm font-medium text-gray-200 flex items-center gap-2"
//                   >
//                               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="What's your name?"
//                     className="w-full p-3 bg-gray-900/70 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="email"
//                     className="text-sm font-medium text-gray-200"
//                   >
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="What's your email address?"
//                     className="w-full p-3 bg-gray-900/70 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="message"
//                     className="text-sm font-medium text-gray-200"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     placeholder="How can I help you?"
//                     rows="5"
//                     className="w-full p-3 bg-gray-900/70 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg
//                         className="animate-spin h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : (
//                     "Send Message"
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* 3D Model Section */}
//           <div className="lg:col-span-7 col-span-12 min-h-[24rem] sm:min-h-[32rem]">
//             <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
//               <ContactExperience />
//             </div>
//           </div>
//         </div>

// {/* Alternative Contact Methods for Mobile */}
// <div className="mt-12 lg:hidden">
//   <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10">
//     <h3 className="text-xl font-semibold text-gray-100 mb-5 text-center">
//       Other Ways to Connect
//     </h3>

//     <div className="grid grid-cols-2 gap-5">
//       {/* Email */}
//       <a
//         href="mailto:sahityaghosh350@gmail.com"
//         className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-white/10 transition-all duration-300"
//       >
//         {/* Replace this img with your uploaded email icon */}
//         <img
//           src="/images/emailme.png" 
//           alt="Email"
//           className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
//         />
//         <span className="text-sm text-gray-200 group-hover:text-blue-400 transition">
//           Email
//         </span>
//       </a>

//       {/* WhatsApp */}
//       <a
//         href="https://acesse.one/messageme"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] border border-white/10 transition-all duration-300"
//       >
//         {/* Replace this img with your uploaded WhatsApp icon */}
//         <img
//           src="/images/messageme.webp"
//           alt="WhatsApp"
//           className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
//         />
//         <span className="text-sm text-gray-200 group-hover:text-green-400 transition">
//           WhatsApp
//         </span>
//       </a>
//     </div>
//   </div>
// </div>


//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full max-w-7xl">
        {/* Title Header */}
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-12">
          {/* Form Section */}
          <div className="lg:col-span-5 col-span-12">
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-700/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 md:gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="w-full p-3.5 bg-gray-800/60 border border-gray-600/40 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/50 transition-all duration-300 shadow-inner"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="w-full p-3.5 bg-gray-800/60 border border-gray-600/40 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/50 transition-all duration-300 shadow-inner"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="4"
                    className="w-full p-3.5 bg-gray-800/60 border border-gray-600/40 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/50 transition-all duration-300 shadow-inner resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-white-100  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

    {/* 3D Model Section */}
<div className="lg:col-span-7 col-span-12 min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem]">
  <div className="relative bg-gradient-to-br from-blue-700  
                  w-full h-full rounded-2xl shadow-2xl transition-all duration-500 
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] group">
    
    {/* ✨ Allow pointer events to pass through */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
    
    {/* 3D Model */}
    <ContactExperience />
    
    {/* Floating elements */}
    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse pointer-events-none"></div>
    <div className="absolute bottom-6 left-6 w-10 h-10 bg-blue-400/20 rounded-full blur-lg pointer-events-none"></div>
  </div>
</div>



        </div>

        {/* Alternative Contact Methods for Mobile */}
        <div className="mt-8 lg:hidden">
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Other Ways to Connect
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="mailto:sahityaghosh350@gmail.com" 
                className="flex flex-col items-center justify-center p-3 bg-gray-800/40 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="bg-blue-600/20 p-2 rounded-full mb-2 group-hover:bg-blue-600/30 transition-colors">
                  <img
                    src="/images/emailme.png" 
                    alt="Email"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs text-gray-300 group-hover:text-white">Email</span>
              </a>
              <a 
                href="https://acesse.one/messageme" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 bg-gray-800/40 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="bg-green-600/20 p-2 rounded-full mb-2 group-hover:bg-green-600/30 transition-colors">
                  <img
                    src="/images/messageme.webp"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs text-gray-300 group-hover:text-white">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;