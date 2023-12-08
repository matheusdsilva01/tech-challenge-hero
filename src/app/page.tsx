"use client"

import { useContext } from "react"
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"
import TaskCard from "@/components/task/TaskCard"
import TaskList from "@/components/task/TaskList"
import { TasksContext } from "@/context/Tasks"
import { useTasks } from "@/hooks/useTasks"

const cardsTitle = {
  todo: "To do",
  doing: "Doing",
  qa: "QA",
  done: "Done",
}

const Home = () => {
  const { tasks } = useContext(TasksContext)
  const { changePosition } = useTasks()
  type Key = keyof typeof cardsTitle
  const taskEntries = Array.from(Object.entries(cardsTitle)) as [Key, string][]

  function changeListTask({ destination, source }: DropResult) {
    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      const task = tasks[source.droppableId as Key][source.index]
      changePosition(task, source.droppableId as Key, destination.index)
    }
  }
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 px-[84px] pb-9 pt-[121px]">
      {tasks &&
        taskEntries.map(([key, value]: [key: Key, value: string]) => (
          <TaskList key={key} title={`${value} (${tasks[key].length})`}>
            <DragDropContext onDragEnd={changeListTask}>
              <Droppable droppableId={key}>
                {provided => (
                  <section
                    className="mt-9 space-y-4"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks[key].map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                    {provided.placeholder}
                  </section>
                )}
              </Droppable>
            </DragDropContext>
          </TaskList>
        ))}
    </div>
  )
}

export default Home
