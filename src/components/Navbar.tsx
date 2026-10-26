"use client";

import { AnimatedContainer } from "./AnimatedContainer";

export function Navbar() {
  return (
    <AnimatedContainer
      as="nav"
      animation="slideDown"
      className="w-[90%] z-10 flex-row items-center justify-between py-3 px-5 bg-primary/10 absolute top-5 left-1/2 transform -translate-x-1/2 rounded-b-lg backdrop-blur-md"
    >
      <span>B. Cupen</span>

      <ul className="flex items-center gap-3 text-white">
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </AnimatedContainer>
  );
}
