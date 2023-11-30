import { createContext } from "react"

export const ModalContext = createContext({
  isOpen: false,
  onClose: () => {},
  onSubmit: () => {},
})
