import { InputHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

type InputProps = {
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement>

const input = tv({
  base: "bg-zinc-800 p-2 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent",
})

const InputRadio = ({
  label,
  labelStyle,
  className,
  ...otherProps
}: InputProps) => {
  const wrapperStyle = "flex p-2"
  labelStyle = `${labelStyle} ml-2`
  return (
    <div className={wrapperStyle}>
      <input
        {...otherProps}
        type="radio"
        id={label}
        className={input({ class: className })}
      />
      {label && (
        <label htmlFor={label} className={labelStyle}>
          {label}
        </label>
      )}
    </div>
  )
}

export default InputRadio
