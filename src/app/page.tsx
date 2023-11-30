"use client"
import { useState } from "react"
import Button from "@/components/button"
import { Input } from "@/components/input"
import { Modal } from "@/components/modal"
import Select from "@/components/select"

/* this page is to show a all components in project */
const Home = () => {
  const title = "text-2xl font-bold text-blue-500"
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button rounded fullWidth visual="outlined">
        logout
      </Button>
      <Button rounded fullWidth visual="outlined" color="danger">
        to dash
      </Button>
      <Button rounded fullWidth>
        Hello world
      </Button>
      <h1 className={title}>text</h1>
      <Input.InputText label="Nome" fullWidth />
      <h1 className={title}>number</h1>
      <Input.InputNumber label="Age" fullWidth />
      <h1 className={title}>radio</h1>
      <Input.InputRadio label="Js" value="javascript" name="fav_lang" />
      <Input.InputRadio label="Java" value="java" name="fav_lang" />
      <h1 className={title}>select</h1>
      <Select
        variant="tertiary"
        options={[
          { label: "First", value: "1" },
          { label: "Second", value: "2" },
          { label: "Thirty", value: "3" },
        ]}
      />
      <h1 className={title}>checkbox</h1>
      <Input.InputCheckbox label="Concordo" id="accept" />
      <h1 className={title}>modal</h1>
      <Button
        rounded
        fullWidth
        className="mb-5"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </Button>
      <Modal.ModalRoot
        onSubmit={() => console.log("submit")}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.ModalContent>Conteúdo modal oi</Modal.ModalContent>
        <Modal.ModalActions />
      </Modal.ModalRoot>
    </div>
  )
}

export default Home
