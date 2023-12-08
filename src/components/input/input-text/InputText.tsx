import { InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { baseInput } from "../styles"

type InputVariants = VariantProps<typeof input>
type WrapperVariants = VariantProps<typeof wrapper>
type InputProps = {
  label?: string
  labelStyle?: string
  register?: any
  error?: boolean
} & InputHTMLAttributes<HTMLInputElement> &
  InputVariants &
  WrapperVariants
const input = tv({
  extend: baseInput,
  variants: baseInput.variants,
})

const wrapper = tv({
  base: "relative",
  variants: {
    fullWidth: { true: "w-full" },
  },
})

const InputText = ({
  fullWidth,
  label,
  labelStyle,
  className,
  register,
  error,
  ...otherProps
}: InputProps) => {
  return (
    <div className={wrapper({ fullWidth })}>
      <input
        {...register}
        type="text"
        id={label}
        className={input({ class: className, error, ...otherProps })}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={label}
          className={
            labelStyle +
            " absolute start-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-normal text-neutral-500 duration-300"
          }
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default InputText
