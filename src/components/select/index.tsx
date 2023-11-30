import { SelectHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

type Option = {
  label: string
  value: string
}

const select = tv({
  variants: {
    fullWidth: { true: "w-full" },
    variant: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      tertiary: "bg-white hover:bg-gray-100 text-gray-800",
    },
  },
})
type SelectProps = {
  options: Option[]
  fullWidth?: boolean
  variant?: "primary" | "secondary" | "tertiary"
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  options,
  fullWidth,
  variant = "primary",
  className,
  ...otherProps
}: SelectProps) => {
  return (
    <select
      className={select({ fullWidth, variant, class: className })}
      {...otherProps}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
