import { HTMLAttributes, ReactNode } from "react"

type ModalContentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>
const ModalContent = ({ children, ...otherProps }: ModalContentProps) => {
  return (
    <div
      className={
        "flex max-h-[600px] flex-1 flex-col overflow-auto py-2 " +
        otherProps.className
      }
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default ModalContent
