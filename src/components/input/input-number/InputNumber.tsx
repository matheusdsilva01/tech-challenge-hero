import { InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { baseInput } from "../styles"

type InputVariants = VariantProps<typeof wrapper>
type InputProps = {
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement> &
  InputVariants

const input = tv({
  extend: baseInput,
})
const wrapper = tv({
  base: "w-fit flex flex-col p-2",
  variants: {
    fullWidth: { true: "w-full" },
  },
})

const InputNumber = ({
  fullWidth,
  label,
  labelStyle,
  className,
  ...otherProps
}: InputProps) => {
  return (
    <div className={wrapper({ fullWidth })}>
      {label && (
        <label htmlFor={label} className={labelStyle + " mb-2"}>
          {label}
        </label>
      )}
      <input
        type="number"
        id={label}
        className={input({ class: className })}
        {...otherProps}
      />
    </div>
  )
}

export default InputNumber
