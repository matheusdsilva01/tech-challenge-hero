"use client"

import { useContext } from "react"
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"
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

  function changeListTask({ destination, source }: DropResult) {
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
    <div className="flex flex-wrap gap-x-10 gap-y-4 px-[84px] pb-9 pt-[121px]">
      <DragDropContext onDragEnd={changeListTask}>
        {tasks &&
          taskEntries.map(([key, value]: [key: KeyTaskList, value: string]) => (
            <TaskList key={key} title={`${value} (${tasks[key].length})`}>
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
            </TaskList>
          ))}
      </DragDropContext>
    </div>
  )
}

export default Home
