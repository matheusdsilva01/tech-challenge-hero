import { MouseEvent, ReactNode, useEffect } from "react"
import { ModalContext } from "@/context/Modal"

type ModalRootProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  children: ReactNode
}

const ModalRoot = ({ isOpen, children, onClose, onSubmit }: ModalRootProps) => {
  const className =
    "fixed top-0 left-0 w-full h-full bg-black/[0.85] z-50 flex justify-center items-center"
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
              className="mx-2 flex min-h-[463px] w-full max-w-2xl flex-col overflow-auto rounded-lg bg-white px-10"
            >
              <div className="overflow-hidden pt-8">
                <h2 className="text-[26px] font-semibold text-indigo-800">
                  Novo Card
                </h2>
                {/* <button onClick={onClose} className="float-right m-auto">
                  <X className="h-6 w-6 cursor-pointer" />
                </button> */}
              </div>
              <div className="mt-9 flex min-h-full w-full flex-1 flex-col">
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
