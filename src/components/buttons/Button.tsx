import React, { ComponentProps } from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'

const buttonStyles = cva(["hover:bg-secondary-hover","transition-colors"],{
  variants: {
    variant:{
      default: ["bg-secondary","hover:bg-secondary-hover"],
      ghost:["hover:bg-gray-100"],
      dark: ["bg-secondary-dark","hover:bg-secondary-dark-hover","text-secondary"],
      
    },
    size: {
      default: [
        "rounded",
        "p-2"
      ],
      icon: [
        "rounded-full",
        "flex",
        "w-10",
        "h-10",
        "items-center",
        "justify-center",
        "p-2.5"
      ]
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export default function Button({variant, size, className, ...props}: ButtonProps) {
  return (
    <button {...props} className={twMerge(buttonStyles({variant, size}),className)} />


  )
}
