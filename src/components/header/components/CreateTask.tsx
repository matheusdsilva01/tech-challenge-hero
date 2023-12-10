"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"
import Badge from "@/components/Badge"
import Button from "@/components/button"
import { Input } from "@/components/input"
import { Modal } from "@/components/modal"
import Textarea from "@/components/textarea"
import { useTasks } from "@/hooks/useTasks"

const priority = ["high", "medium", "low"] as const

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.string(),
  endDate: z.coerce.date(),
})

type TaskFormData = z.infer<typeof schema>
const CreateTask = () => {
  const { addTask } = useTasks()
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TaskFormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: any) {
    addTask(data)
    toast.success("Task criada com sucesso!")
    setOpen(false)
  }

  return (
    <>
      <Button
        className="ml-auto rounded-xl px-4 py-2 font-medium md:px-6 md:py-4 md:text-xs"
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
          <div className="mt-6 flex flex-col justify-between sm:flex-row">
            <Input.InputText
              type="date"
              error={!!errors.endDate}
              register={register("endDate")}
              label="Data final"
              className="w-full sm:w-[280px]"
              placeholder="Selecione a data de entrega"
            />
            <div className="mt-6 flex w-[232px] flex-wrap justify-between sm:mt-0">
              <h4 className="mb-2 w-full text-[11px] font-normal text-neutral-500">
                Priority
              </h4>
              {priority.map(item => {
                const isSelected = watch("priority") === item
                return (
                  <label htmlFor={item} key={item} className="relative">
                    <input
                      {...register("priority")}
                      type="radio"
                      id={item}
                      name="priority"
                      value={item}
                      className={`peer absolute h-0 w-0 opacity-0`}
                    />
                    <Badge
                      type={item}
                      className={`ring-indigo-800 ring-offset-2 peer-checked:ring-2 peer-focus:ring-2`}
                    />
                    {isSelected && (
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-indigo-800" />
                    )}
                  </label>
                )
              })}
              {!!errors.priority && (
                <p className="text-[11px] text-red-500">
                  Escolha uma prioridade
                </p>
              )}
            </div>
          </div>
        </Modal.ModalContent>
        <Modal.ModalActions />
      </Modal.ModalRoot>
    </>
  )
}

export default CreateTask
