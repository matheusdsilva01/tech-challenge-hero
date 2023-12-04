import { TextareaHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { baseInput } from "../input/styles"

type InputVariants = VariantProps<typeof input>
type WrapperVariants = VariantProps<typeof wrapper>
type InputProps = {
  label?: string
  labelStyle?: string
  register?: any
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
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

const Textarea = ({
  fullWidth,
  label,
  labelStyle,
  className,
  register,
  ...otherProps
}: InputProps) => {
  return (
    <div className={wrapper({ fullWidth })}>
      <textarea
        {...register}
        id={label}
        className={input({ class: className, ...otherProps })}
        {...otherProps}
      ></textarea>
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

export default Textarea
