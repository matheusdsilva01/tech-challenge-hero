import { HTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const BadgeS = tv({
  base: "rounded-full border px-2 py-0.5 w-min text-center text-[12px] font-medium sm:font-semibold sm:px-3",
  variants: {
    type: {
      low: "border-lime-700 text-lime-700",
      medium: "border-amber-300 text-amber-300",
      high: "border-none text-white bg-danger",
    },
  },
})
type BadgeVariants = VariantProps<typeof BadgeS>
type BadgeProps = BadgeVariants &
  HTMLAttributes<HTMLDivElement> & {
    class?: undefined
  }

const Badge = (props: BadgeProps) => {
  const text = {
    low: "LOW",
    medium: "MEDIUM",
    high: "HIGH",
  } as const
  return <div className={BadgeS(props)}>{text[props.type || "low"]}</div>
}

export default Badge
