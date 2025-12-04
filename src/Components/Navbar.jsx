import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ links = null }) {
  const [open, setOpen] = useState(false);

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
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Container to center and provide padding */}
      <div className="w-fit mx-auto mt-2 px-4 sm:px-6 lg:px-8">
        {/* Dark glass panel */}
        <nav
          className="backdrop-blur-md bg-white transparent  border border-white/10 rounded-xl
                        shadow-lg py-3 px-6 flex items-center justify-center
                          transition-all duration-300"
          aria-label="Main navigation"
        >
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((l, index) => (
              <li key={l.name} className="flex items-center">
               
                <Link
                  to={l.href}
                  className="text-black px-3 py-2 rounded-md text-sm font-medium 
                              transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
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

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-3 md:hidden">
            <div className="backdrop-blur-md bg-gray-800/90 border border-white/10 rounded-lg p-3 space-y-1 shadow-lg">
              {navLinks.map((l) => (
                <Link
                  key={l.name}
                  to={l.href}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
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