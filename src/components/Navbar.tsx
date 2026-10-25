'use client'

import { AnimatedContainer } from "./AnimatedContainer"

export function Navbar() {
    return (
        <AnimatedContainer as='nav' animation="slideDown" className="flex-row items-center justify-between w-full py-3 px-5 bg-primary/95">
            <span>
                B. Cupen
            </span>

            <ul className="flex items-center gap-3 text-white">
                <li><a>About</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
            </ul>
        </AnimatedContainer>
    )
}
