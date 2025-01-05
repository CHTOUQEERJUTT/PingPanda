import { cn } from "@/utils"
import { ReactNode } from "react"

interface MaxWidthRapperProps {
    className?:string
    children:ReactNode

}

export const MaxWidthRapper = ({className,children}:MaxWidthRapperProps)=>{
    return <div 
    className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
    )}>
        {children}
    </div>
}

//Why we are using Cn
//So agar hum aik div pr pehle bg-red lgaye ge or same div pr dubara bg-black lga de to aam tor pr black lag jaye ga 
//Hum cn use kr rhe take agar baad me kuch same property ki valye different ho to ye conflict na kre 