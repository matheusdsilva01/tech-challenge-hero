import { InputHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

type InputCheckboxProps = {
  fullWidth?: boolean
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement>

const wrapper = tv({
  base: "flex items-center p-2",
  variants: {
    fullWidth: { true: "w-full" },
  },
})
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
