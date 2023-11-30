import { useContext } from "react"
import { ModalContext } from "@/context/Modal"
import Button from "../button"

const ModalActions = () => {
  const modalContext = useContext(ModalContext)

  return (
    <div className="mt-1 flex w-full gap-2 bg-gray-900 px-2 py-1">
      <Button onClick={() => modalContext.onSubmit()}>Confirm</Button>
      <Button variant="secondary" onClick={() => modalContext.onClose()}>
        Cancel
      </Button>
    </div>
  )
}

export default ModalActions
