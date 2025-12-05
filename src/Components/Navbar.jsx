import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pop from "./Animations/Pop";

export default function Navbar({ links = null }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, etc.)
    navigate('/login');
  };

  const navLinks =
    links ||
    [
      { name: "Home", href: "/dashboard" },
      { name: "Patients", href: "#" },
      { name: "Camera", href: "#" },
      { name: "Gallery", href: "#" },
      { name: "Settings", href: "#" },
    ];

  return (
    <>
      {/* Logout Button - Fixed in corner */}
    
        <button
          onClick={handleLogout}
          className="fixed top-2 right-2 z-50 flex items-center gap-2 px-4 py-2 rounded-xl 
                     backdrop-blur-xl bg-white/20 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                     text-sm font-medium text-[#1F2937] hover:bg-white/30 hover:text-[#0E7490] 
                     transition-all duration-300 cursor-pointer"
        
        >
         
          <span className="hidden sm:inline">Logout</span>
        </button>
      

      <header className="fixed left-0 right-0 top-0 z-50">
        {/* Container to center and provide padding */}
        <div className="w-fit  mx-auto mt-2 px-4 sm:px-6 lg:px-8">
        <Pop delay={300}>
          {/* Glassmorphic navbar */}
          <nav
            className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-2xl
                          shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-3 px-6 flex items-center justify-center
                            transition-all duration-300"
            aria-label="Main navigation"
          >
            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((l, index) => (
                <li key={l.name} className="flex items-center">
                  <Link
                    to={l.href}
                    className="text-[#1F2937] px-3 py-2 rounded-md text-sm font-medium 
                                hover:text-[#0E7490] transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#1F2937] p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </Pop>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-3 md:hidden">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-lg p-3 space-y-1 shadow-lg">
              {navLinks.map((l) => (
                <Link
                  key={l.name}
                  to={l.href}
                  className="block px-3 py-2 rounded-md text-[#1F2937] hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              ))}
              {/* Logout Button - Mobile */}
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-[#1F2937] hover:bg-white/10 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
    </header>
    </>
  );
}

/*
  Additional tips:
  1. Make sure the page has a visible, lively background to show the glass effect, for example:

     <div className="min-h-screen" style={{
       background: 'linear-gradient(120deg,#1f3a44 0%, #0f9ba8 45%, #08323a 100%)'
     }}>
       <GlassNavBar brand="Before & After" />
       ...page content...
     </div>

  2. If Tailwind doesn't show backdrop-blur utilities, ensure your Tailwind version supports them.
     For Tailwind v3+: no extra config needed. For older versions, install the `@tailwindcss/forms` or
     `tailwindcss-filters` plugin and enable it in tailwind.config.js.

  3. You can tweak the opacity, blur strength (backdrop-blur-sm/md/lg), and gradient colors to match
     your brand. This component uses subtle borders and increased saturation on hover for a modern look.
*/