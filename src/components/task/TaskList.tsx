"use client"
import { ReactNode, useState } from "react"
import { DroppableProvided } from "@hello-pangea/dnd"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TaskListProps {
  title: string
  children: ReactNode
  provided: DroppableProvided
}

const TaskList = ({ children, title, provided }: TaskListProps) => {
  const [show, setShow] = useState(false)
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className={`h-fit min-h-[243px] w-full max-w-[300px] flex-1 shrink-0 basis-full flex-col rounded-3xl bg-zinc-100 px-2 py-[14px] shadow-card sm:max-w-[330px] ${
        show ? "min-h-fit" : ""
      }`}
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-neutral-500 sm:text-xl">
          {title}
        </h2>
        <button onClick={() => setShow(prev => !prev)}>
          {show ? (
            <ChevronDown className="h-6 w-6 text-neutral-500" />
          ) : (
            <ChevronUp className="h-6 w-6 text-neutral-500" />
          )}
        </button>
      </div>
      <div className={`${show ? "max-h-0 overflow-hidden" : "px-1 "}`}>
        {children}
      </div>
    </div>
  )
}

export default TaskList
