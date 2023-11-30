import { MouseEvent, ReactNode, useEffect } from "react"
import { X } from "lucide-react"
import { ModalContext } from "@/context/Modal"

type ModalRootProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  children: ReactNode
}

const ModalRoot = ({ isOpen, children, onClose, onSubmit }: ModalRootProps) => {
  const className =
    "fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose()
    }
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
  }
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])
  return (
    <>
      {isOpen && (
        <ModalContext.Provider value={{ isOpen, onClose, onSubmit }}>
          <div onClick={onClose} className={className}>
            <div
              onClick={stopPropagation}
              className="mx-2 min-h-[488px] w-full max-w-2xl overflow-auto rounded-lg bg-white text-zinc-800"
            >
              <div className="overflow-hidden bg-zinc-300 p-2">
                <span className="font-bold text-zinc-900">Modal</span>
                <button onClick={onClose} className="float-right m-auto">
                  <X className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
              <div className="flex min-h-inherit w-full flex-col">
                {children}
              </div>
            </div>
          </div>
        </ModalContext.Provider>
      )}
    </>
  )
}

export default ModalRoot
