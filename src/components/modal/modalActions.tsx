import { useContext } from "react"
import { ModalContext } from "@/context/Modal"
import Button from "../button"

const ModalActions = () => {
  const modalContext = useContext(ModalContext)

  return (
    <div className="mb-10 mt-auto flex w-full gap-2 px-2 py-1">
      <Button
        className="ml-auto w-44 text-ss font-normal text-danger"
        visual="outlined"
        color="danger"
        rounded
        onClick={() => modalContext.onSubmit()}
      >
        Confirm
      </Button>
      <Button
        rounded
        className="w-44 text-ss font-normal"
        onClick={() => modalContext.onClose()}
      >
        Cancel
      </Button>
    </div>
  )
}

export default ModalActions
