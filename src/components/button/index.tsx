import { ButtonHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "sm:px-4 sm:py-2 px-2 py-1",
  variants: {
    visual: {
      contained: "!text-white border-none",
      outlined: "border-2 !bg-white",
    },
    color: {
      indigo: "bg-indigo-800 text-indigo-800 border-indigo-800",
      danger: "bg-danger text-danger border-danger",
      violet: "bg-violet-300 text-violet-300 border-violet-300",
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-3xl",
    },
  },
})

type ButtonVariants = VariantProps<typeof button>
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

const Button = ({
  children,
  rounded,
  color = "indigo",
  fullWidth,
  className,
  visual = "contained",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={button({
        fullWidth,
        color,
        rounded,
        visual,
        class: className,
      })}
    >
      {children}
    </button>
  )
}

export default Button
