'use client'

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ElementType } from "react";

export interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  animation?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fadeIn";
  duration?: number;
  bgColor?: "primary" | "secondary" | "transparent";
}

const ContainerVariants = cva(
  "flex flex-col bg-primary rounded-lg p-6",
  {
    variants: {
        bgColor: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            transparent: "bg-transparent",

        },
      size: {
        small: "p-4",
        medium: "p-6",
        large: "p-8",
      },
    },
    defaultVariants: {
      size: "medium",
      bgColor: "primary",
    },
  }
);

const animationVariants = {
  slideUp: { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1,  } },
  slideDown: { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1,  } },
  slideLeft: { initial: { x: 20, opacity: 0 }, animate: { x: 0, opacity: 1,  } },
  slideRight: { initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1, } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1, } },
};



export function AnimatedContainer({ children, className, as = "div", animation = "fadeIn", duration = 0.5, bgColor = "primary" }: AnimatedContainerProps) {
    const MotionComponent = motion.create(as);
  return (
    <MotionComponent
      {...animationVariants[animation]}
      animate={{
        ...animationVariants[animation].animate,
        transition: { duration },
      }}
      className={cn(ContainerVariants({ size: "medium", bgColor }), className)}
    >
      {children}
    </MotionComponent>
  );
}