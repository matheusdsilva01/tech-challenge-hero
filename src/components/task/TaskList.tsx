import { ReactNode } from "react"

interface TaskListProps {
  title: string
  children: ReactNode
}

const TaskList = ({ children, title }: TaskListProps) => {
  return (
    <div className="h-fit min-h-[243px] w-full max-w-[330px] flex-1 shrink-0 basis-full flex-col rounded-3xl bg-zinc-100 px-2 py-[14px] shadow-card">
      <h2 className="text-lg font-bold text-neutral-500 sm:text-xl">{title}</h2>
      <div className="px-1">{children}</div>
    </div>
  )
}

export default TaskList
