import { InputHTMLAttributes } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const wrapper = tv({
  base: "flex items-center p-2",
  variants: {
    fullWidth: { true: "w-full" },
  },
})

type InputVariants = VariantProps<typeof wrapper>
type InputCheckboxProps = {
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement> &
  InputVariants

const labelS = tv({
  base: "ml-2",
})

const InputCheckbox = ({
  fullWidth,
  label,
  labelStyle,
  ...otherProps
}: InputCheckboxProps) => {
  return (
    <div className={wrapper({ fullWidth })}>
      <input type="checkbox" {...otherProps} />
      {label && (
        <label
          htmlFor={otherProps.id}
          className={labelS({ class: labelStyle })}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default InputCheckbox
