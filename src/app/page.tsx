"use client"

import { useContext } from "react"
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"
import Image from "next/image"
import TaskCard from "@/components/task/TaskCard"
import TaskList from "@/components/task/TaskList"
import { TasksContext } from "@/context/Tasks"
import { useTasks } from "@/hooks/useTasks"
import { KeyTaskList } from "@/types/task"

const cardsTitle = {
  todo: "To do",
  doing: "Doing",
  qa: "QA",
  done: "Done",
}

const Home = () => {
  const { tasks } = useContext(TasksContext)
  const { changePosition, changeList } = useTasks()
  const taskEntries = Array.from(Object.entries(cardsTitle)) as [
    KeyTaskList,
    string,
  ][]

  function onDragEnd({ destination, source }: DropResult) {
    if (!destination) return
    const task = tasks[source.droppableId as KeyTaskList][source.index]

    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      changePosition(task, source.droppableId as KeyTaskList, destination.index)
      return
    }
    if (destination.droppableId !== source.droppableId) {
      changeList(
        task,
        destination.index,
        source.droppableId as KeyTaskList,
        destination.droppableId as KeyTaskList,
      )
      return
    }
  }
  return (
    <div className="flex h-full flex-1 gap-x-9 gap-y-4 overflow-auto px-3 pb-9 pt-7 sm:gap-x-10 sm:pt-[121px] md:px-8 xl:px-[84px]">
      <DragDropContext onDragEnd={onDragEnd}>
        {tasks &&
          taskEntries.map(([key, value]: [key: KeyTaskList, value: string]) => (
            <Droppable key={key} droppableId={key}>
              {provided => (
                <TaskList
                  key={key}
                  provided={provided}
                  title={`${value} (${tasks[key].length})`}
                >
                  <section className="mt-2 space-y-4 sm:mt-9">
                    {tasks[key].length > 0 ? (
                      tasks[key].map(task => (
                        <TaskCard key={task.id} task={task} />
                      ))
                    ) : (
                      <div>
                        <Image
                          src="/icons/cat.png"
                          alt="image cat"
                          className="m-auto w-52"
                          width={612}
                          height={446}
                        />
                        <p className="text-center text-gray-400">
                          Sem tarefas aqui...
                        </p>
                      </div>
                    )}
                  </section>
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          ))}
      </DragDropContext>
    </div>
  )
}

export default Home
