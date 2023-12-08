export interface TaskList {
  todo: Task[] | []
  doing: Task[] | []
  qa: Task[] | []
  done: Task[] | []
}
export interface Task {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  endDate: Date
}
