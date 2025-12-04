import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Lottie from "lottie-react";
import FloatingInput from "../Components/FloatingInput";

import dermatAnim from "./Dermatologist.json";
import footerImage from "./footer.png"; // full width footer

gsap.registerPlugin(SplitText);

const LoginPage = () => {
  const titleRef = useRef(null);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;

    const split = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "split-char",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(titleRef.current, {
          y: -200,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => setShowPage(true),
        });
      },
    });

    return () => split.revert();
  }, []);

  return (
    <>
    


      {/* upper div - White Card Design */}
      <div
  className="w-full h-screen relative overflow-hidden"
  style={{
    background: "linear-gradient(90deg, #D7D9DB 50%, #0B6B75 50%)",

  }}
>

        {/* TITLE ANIMATION */}
        <h1
          ref={titleRef}
          className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-bold text-white pointer-events-none z-10"
        >
          Hello, Dermat !
        </h1>

        {/* FULL UI SHOWN AFTER TEXT HIDES */}
        {showPage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full flex justify-center items-center px-4"
          >
            {/* White Card Container */}
            <div className="w-full mt-20 max-w-4xl h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
              {/* LEFT PANEL – LOTTIE ANIMATION */}
              <div className="w-1/2  relative flex justify-center items-center" style={{ background: "#0F9BA8" }}>
                {/* Background building illustration */}
                <img
                  src={footerImage}
                  className="absolute -bottom-7 left-0 w-full h-1/3 opacity-5 object-cover"
                  alt="background"
                />
                
                <div className="relative z-10 w-[430px] h-[430px] flex items-center justify-center">
                  <Lottie animationData={dermatAnim} loop />
                </div>
              </div>

              {/* RIGHT PANEL – LOGIN FORM */}
              <div className="w-1/2 relative  flex flex-col justify-center items-center p-10 bg-[#F4F6F8]">
                {/* Background building illustration */}
                <img
                  src={footerImage}
                  className="absolute -bottom-7  right-0 w-full h-1/3 opacity-5 object-cover"
                  alt="background"
                />
                
                <div className="relative z-10 w-full max-w-md">
                  <h2 className="text-3xl mb-4 font-bold mb-2 text-center text-[#008C9E]">
                    Before & After
                  </h2>
                  

                  <FloatingInput label="Mobile Number" type="tel" />
                  <FloatingInput label="OTP" type="text" />

                  <button className="w-full bg-[#0F9BA8] cursor-pointer text-white py-3 rounded-lg font-semibold mt-4 hover:bg-[#007a8a] transition-colors">
                    Login
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    Developed by <b className="cursor-pointer text-[#0F9BA8]">Kanishka Software</b>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default LoginPage;
