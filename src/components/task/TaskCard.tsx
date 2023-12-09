"use client"

import { useContext } from "react"
import { Draggable } from "@hello-pangea/dnd"
import { CheckCircle2, Clock3 } from "lucide-react"
import { TasksContext } from "@/context/Tasks"
import { Task } from "@/types/task"
import Badge from "../Badge"

interface TaskCardProps {
  task: Task
}

const TaskCard = ({
  task: { description, endDate, id, priority, title },
}: TaskCardProps) => {
  const textColor =
    new Date(endDate) < new Date() ? "text-red-500" : "text-gray-500"
  const { tasks } = useContext(TasksContext)
  const indexList = Object.values(tasks).findIndex(task =>
    task.find((t: Task) => t.id === id),
  )
  const index = Object.values(tasks)[indexList].findIndex(
    (task: Task) => task.id === id,
  )

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="min-h-[155px] w-full rounded-xl bg-white p-5 text-neutral-500 shadow"
        >
          <h3 className="break-words font-semibold sm:text-xl">{title}</h3>
          <p className="mt-4 break-words text-sm font-medium sm:text-ss">
            {description}
          </p>
          <div className="mt-5 flex w-full items-center text-[12px] sm:text-sm">
            {indexList !== 3 ? (
              <>
                <Clock3 className={`w-4 sm:w-6 ${textColor}`} />
                <span className={`ml-2.5 font-semibold ${textColor}`}>
                  {new Date(endDate).toLocaleDateString("pt-BR")}
                </span>
                <Badge type={priority} className="ml-auto" />
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 text-lime-700 sm:w-6" />
                <span className="ml-2.5 font-semibold text-lime-700">
                  Finalizado
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
