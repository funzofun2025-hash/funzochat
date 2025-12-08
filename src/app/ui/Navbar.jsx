"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import FeedbackModal from "./HeroUI/FeedbackModal";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
`;
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* 1. Logo (Text) */}
            <div className="flex shrink-0 items-center">
              <span
                className="cursor-pointer rounded-2xl bg-linear-to-r from-red-600 to-purple-500 bg-clip-text p-1 text-2xl font-bold text-transparent hover:bg-linear-to-l hover:from-red-500 hover:to-purple-500"
                onClick={() => window.scrollTo(0, 0)}
              >
                Funzo
              </span>
            </div>

            {/* Desktop Menu (Hidden on mobile) */}
            <div className="hidden items-center space-x-8 md:flex">
              {/* 2. Features Link */}
              <Button
                onClick={() => scrollToSection("features")}
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Features
              </Button>

              {/* 3. Download Link */}
              <Button
                onClick={() => scrollToSection("download")}
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Download
              </Button>

              {/* 4. Send Feedback Button */}
              <Button
                onClick={() => setIsFeedbackModalOpen(true)}
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700"
              >
                Send Feedback
              </Button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex items-center md:hidden">
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Transition */}
        <div
          className={`absolute top-16 left-0 w-full transform bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-2 px-4 pt-2 pb-6">
            <Button
              onClick={() => scrollToSection("features")}
              className="block w-full rounded-md py-3 text-center font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Features
            </Button>
            <Button
              onClick={() => scrollToSection("download")}
              className="block w-full rounded-md py-3 text-center font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Download
            </Button>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsFeedbackModalOpen(true);
              }}
              className="block w-full rounded-md py-3 text-center font-bold text-blue-600 hover:bg-blue-50"
            >
              Send Feedback
            </Button>
          </div>
        </div>
      </nav>

      {/* --- FEEDBACK MODAL --- */}
      {isFeedbackModalOpen && (
        <FeedbackModal handleClose={setIsFeedbackModalOpen} />
      )}
    </>
  );
}

// "use client";
// import Link from "next/link";
// import { FaMessage } from "react-icons/fa6";
// import styled from "styled-components";

// const StyledLink = styled[Link]`
//   color: black;
// `;

// function Navbar() {
//   return (
//     <nav className="flex text-[1.1rem] w-full justify-around items-center p-4 h-fit ">
//       <p>Funzo</p>
//       <div className="flex items-center gap-8">
//         <div className="flex gap-5">
//           <StyledLink href={"#"}>Features</StyledLink>
//           <Link href={"#"}>Download</Link>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-4 py-2 flex items-center gap-2  rounded-4xl">
//           <FaMessage /> Send Feedback
//         </button>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;
