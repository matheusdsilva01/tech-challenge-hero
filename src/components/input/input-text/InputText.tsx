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
  base: "flex flex-col p-2",
  variants: {
    fullWidth: { true: "w-full" },
  },
})

const InputText = ({
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
        type="text"
        id={label}
        className={input({ class: className })}
        {...otherProps}
      />
    </div>
  )
}

export default InputText
