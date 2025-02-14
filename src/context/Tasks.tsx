"use client"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react"
import { emptyTasks, initialTasks } from "@/hooks/useTasks"
import { TaskListType } from "@/types/task"

type TasksContextProps = {
  tasks: TaskListType
  setTasks: Dispatch<SetStateAction<TaskListType>>
}

export const TasksContext = createContext({} as TasksContextProps)

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskListType>(emptyTasks)

  useEffect(() => {
    if (typeof window === "undefined") return
    const storage = JSON.parse(localStorage.getItem("tasks") || "null")
    if (storage) {
      return setTasks(storage)
    } else {
      localStorage.setItem("tasks", JSON.stringify(initialTasks))
      setTasks(initialTasks)
    }
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
