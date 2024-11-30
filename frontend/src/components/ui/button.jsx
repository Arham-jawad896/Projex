import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5D00D4] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 
          "bg-[#2C3142] text-[#E1E7F0] border border-[#1A2433] shadow-xl hover:bg-[#1A1F2B] hover:text-[#FFFFFF] hover:border-[#1A2433]", 
        destructive: 
          "bg-[#411B1B] text-[#F1A3A3] border border-[#6A2B2B] shadow-xl hover:bg-[#5A2F2F] hover:text-[#F1D4D4] hover:border-[#8C4646]", 
        outline: 
          "bg-transparent text-[#B0B8C0] border border-[#2D3A4A] shadow-lg hover:bg-[#1A2433] hover:text-[#E1E7F0] hover:border-[#2D3A4A]", 
        ghost: 
          "bg-transparent text-[#B0B8C0] border border-transparent hover:bg-[#1A2433] hover:text-[#E1E7F0] hover:border-[#2D3A4A]", 
        link: 
          "text-[#B0B8C0] underline-offset-4 hover:text-[#E1E7F0] hover:underline", 
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
