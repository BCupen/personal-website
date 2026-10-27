import { cn } from "@/utils";
import { cva } from "class-variance-authority";

export interface TextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: "heading" | "body";
  className?: string;
  color?: "primary" | "secondary" | "foreground";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

const TextVariants = cva("", {
  variants: {
    variant: {
      heading: "font-arvo font-bold",
      body: "font-raleway font-normal",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      foreground: "text-foreground",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
  defaultVariants: {
    color: "foreground",
    size: "md",
  },
});

export function Text({
  children,
  as: Component = "p",
  className,
  color = "foreground",
  variant = "body",
  size = "md",
}: TextProps) {
  return (
    <Component
      className={cn(TextVariants({ variant, color, size }), className)}
    >
      {children}
    </Component>
  );
}
