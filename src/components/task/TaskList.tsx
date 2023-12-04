import { ReactNode } from "react"

interface TaskListProps {
  title: string
  children: ReactNode
}

const TaskList = ({ children, title }: TaskListProps) => {
  return (
    <div className="h-fit min-h-[243px] w-full max-w-[330px] rounded-3xl bg-zinc-100 px-2 py-[14px] shadow-card">
      <h2 className="text-xl font-bold text-neutral-500">{title}</h2>
      <div className="mt-9 space-y-4">{children}</div>
    </div>
  )
}

export default TaskList
