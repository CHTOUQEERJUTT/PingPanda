import { ReactNode } from "react";
import { HTMLAttributes } from "react";
import { cn } from "@/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode
}

export const Heading = ({ className, children, ...props}: HeadingProps)=>{
        return <h1 className={cn(
                "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
                className
                )}
                {...props}>
        
                {children}
                </h1>

}

//Why we use extends 
//Hamne Extend use kia take hame sari HtmlHeading Elements ki properties mil sake 