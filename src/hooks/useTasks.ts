"use client"
import { useContext } from "react"
import { v4 as uuid } from "uuid"
import { TasksContext } from "@/context/Tasks"
import { KeyTaskList, Task, TaskListType } from "@/types/task"

export const initialTasks: TaskListType = {
  todo: [
    {
      id: uuid(),
      title: "Testar Navegadores",
      description:
        "Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.",
      endDate: new Date("2023-12-02T00:00:00.000Z"),
      priority: "high",
    },
    {
      id: uuid(),
      title: "Atualizar Bibliotecas",
      description:
        "Manter as libs atualizadas para garantir segurança e aproveitar novos recursos",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "low",
    },
    {
      id: uuid(),
      title: "Implementar Animações",
      description:
        "Adicionar efeitos visuais e transições para melhorar a experiência do usuário.",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "medium",
    },
  ],
  doing: [
    {
      id: uuid(),
      title: "Atualizar Bibliotecas",
      description:
        "Manter as libs atualizadas para garantir segurança e aproveitar novos recursos",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "low",
    },
    {
      id: uuid(),
      title: "Implementar Animações",
      description:
        "Adicionar efeitos visuais e transições para melhorar a experiência do usuário.",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "medium",
    },
    {
      id: uuid(),
      title: "Testar Navegadores",
      description:
        "Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.",
      endDate: new Date("2023-12-02T00:00:00.000Z"),
      priority: "high",
    },
  ],
  qa: [
    {
      id: uuid(),
      title: "Atualizar Bibliotecas",
      description:
        "Manter as libs atualizadas para garantir segurança e aproveitar novos recursos",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "low",
    },
  ],
  done: [
    {
      id: uuid(),
      title: "Final Project : App development",
      description: "Business Web Development",
      endDate: new Date("2023-12-25T00:00:00.000Z"),
      priority: "low",
    },
  ],
}
export const emptyTasks = {
  todo: [],
  doing: [],
  qa: [],
  done: [],
}

export function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext)
  const addTask = (task: Task) => {
    const { todo } = tasks
    const newTask = {
      ...task,
      id: uuid(),
    }
    const newTasks = {
      ...tasks!,
      todo: [...todo, newTask],
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  function changePosition(task: Task, keyTaslList: KeyTaskList, to: number) {
    const newList = tasks[keyTaslList].filter(item => item.id !== task.id)
    newList.splice(to, 0, task)
    const newTasks = {
      ...tasks,
      [keyTaslList]: newList,
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  function changeList(
    task: Task,
    index: number,
    from: KeyTaskList,
    to: KeyTaskList,
  ) {
    const newList = tasks[to]
    newList.splice(index, 0, task)
    const newTasks = {
      ...tasks,
      [from]: tasks[from].filter(item => item.id !== task.id),
      [to]: newList,
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  return { addTask, changePosition, changeList }
}
