"use client"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Badge from "@/components/Badge"
import Button from "@/components/button"
import { Input } from "@/components/input"
import { Modal } from "@/components/modal"
import Textarea from "@/components/textarea"

const priority = ["high", "medium", "low"] as const

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.string(),
  endDate: z.coerce.date(),
})

type TaskFormData = z.infer<typeof schema>
const CreateTask = () => {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: any) {
    console.log(data)
  }
  return (
    <>
      <Button
        className="ml-auto rounded-xl px-6 py-4 text-xs font-medium"
        color="violet"
        onClick={() => setOpen(true)}
      >
        + Novo Card
      </Button>
      <Modal.ModalRoot
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Modal.ModalContent className="space-y-[22px]">
          <Input.InputText
            error={!!errors.title}
            register={register("title")}
            label="Título da Task"
            placeholder="Digite aqui o título da task"
          />
          <Textarea
            error={!!errors.description}
            register={register("description")}
            label="Descrição"
            placeholder="Digite a descrição"
          />
          <div className="mt-6 flex justify-between">
            <Input.InputText
              type="date"
              error={!!errors.endDate}
              register={register("endDate")}
              label="Data final"
              className="w-[280px]"
              placeholder="Selecione a data de entrega"
            />
            <div className="flex w-[232px] flex-wrap justify-between">
              <h4 className="mb-2 w-full text-[11px] font-normal text-neutral-500">
                Priority
              </h4>
              {priority.map(item => (
                <span key={item}>
                  <input
                    {...register("priority")}
                    type="radio"
                    id={item}
                    name="priority"
                    value={item}
                    className={`peer/${item} hidden`}
                  />
                  <label
                    htmlFor={item}
                    className={`peer-checked/${item}:[&>*]:ring-2`}
                  >
                    <Badge
                      type={item}
                      className="ring-indigo-800 ring-offset-2"
                    />
                  </label>
                </span>
              ))}
            </div>
          </div>
        </Modal.ModalContent>
        <Modal.ModalActions />
      </Modal.ModalRoot>
    </>
  )
}

export default CreateTask
