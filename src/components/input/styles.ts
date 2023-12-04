import { tv } from "tailwind-variants"

export const baseInput = tv({
  base: "border-1 block w-full appearance-none rounded-lg border-[#C4C4C4] bg-transparent px-2.5 pb-2.5 pt-4 text-sm placeholder:text-[#C4C4C4] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#C4C4C4] focus:border-transparent",
  variants: {
    error: { true: "border-red-500 focus:ring-red-500" },
  },
})
