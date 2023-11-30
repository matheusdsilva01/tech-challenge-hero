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
