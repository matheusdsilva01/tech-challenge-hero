import { InputHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

type InputProps = {
  fullWidth?: boolean
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement>

const input = tv({
  base: "bg-zinc-800 p-2 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent",
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
