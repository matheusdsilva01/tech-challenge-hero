import { ReactNode } from "react"

type ModalContentProps = {
  children: ReactNode
}
const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="flex max-h-[600px] flex-1 overflow-auto px-4 py-2">
      {children}
    </div>
  )
}

export default ModalContent
