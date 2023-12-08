"use client"
import { useContext } from "react"
import TaskCard from "@/components/task/TaskCard"
import TaskList from "@/components/task/TaskList"
import { TasksContext } from "@/context/tasks"

const cardsTitle = {
  todo: "To do",
  doing: "Doing",
  qa: "QA",
  done: "Done",
}

const Home = () => {
  const { tasks } = useContext(TasksContext)
  type Key = keyof typeof cardsTitle
  const taskEntries = Array.from(Object.entries(cardsTitle)) as [Key, string][]

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 px-[84px] pb-9 pt-[121px]">
      {tasks &&
        taskEntries.map(([key, value]: [key: Key, value: string]) => (
          <TaskList
            key={`${value}-(${tasks[key].length})`}
            title={`${value} (${tasks[key].length})`}
          >
            {tasks[key].map(task => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                date={task.endDate.toString()}
                badgeType={task.priority}
              />
            ))}
          </TaskList>
        ))}
    </div>
  )
}

export default Home
