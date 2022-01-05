import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | number;
    className?: string;
}

export const Button = ({text, className, ...rest}: ButtonProps)  => {
    return (<button className={`p-1 w-full rounded-md cursor-pointer transition-colors ${className}`} {...rest}>{text}</button>)
}