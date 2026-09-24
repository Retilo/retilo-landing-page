import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

import { cn } from "@/lib/utils"

const headingVariants = cva("bg-clip-text pb-3 tracking-tight text-transparent", {
  variants: {
    variant: {
      default:
        "bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200",
      light: "bg-gradient-to-t from-neutral-200 to-neutral-300",
      secondary:
        "bg-gradient-to-t from-neutral-500 to-neutral-600 dark:from-stone-200 dark:to-neutral-200",
      orange: "bg-gradient-to-br from-orange-400 to-orange-600",
      purple: "bg-gradient-to-br from-violet-400 to-indigo-600",
    },
    size: {
      default: "text-2xl sm:text-3xl lg:text-4xl",
      xs: "text-lg sm:text-xl lg:text-2xl",
      sm: "text-xl sm:text-2xl lg:text-3xl",
      md: "text-2xl sm:text-3xl lg:text-4xl",
      lg: "text-3xl sm:text-4xl lg:text-5xl",
      xl: "text-4xl sm:text-5xl lg:text-6xl",
      xxl: "text-5xl sm:text-6xl lg:text-[6rem]",
    },
    weight: {
      default: "font-bold",
      semi: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
  defaultVariants: { variant: "default", size: "default", weight: "default" },
})

export interface GradientHeadingProps extends VariantProps<typeof headingVariants> {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

const GradientHeading = React.forwardRef<HTMLHeadingElement, GradientHeadingProps>(
  ({ asChild, variant, weight, size, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3"
    return (
      <Comp ref={ref} {...props} className={className}>
        <span className={cn(headingVariants({ variant, size, weight }))}>{children}</span>
      </Comp>
    )
  }
)

GradientHeading.displayName = "GradientHeading"

export { GradientHeading, headingVariants }
