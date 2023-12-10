import { ReactNode } from "react"

interface TaskListProps {
  title: string
  children: ReactNode
}

const TaskList = ({ children, title }: TaskListProps) => {
  return (
    <div className="flex h-fit max-h-full min-h-[243px] w-full max-w-[330px] flex-1 shrink-0 basis-full flex-col overflow-auto rounded-3xl bg-zinc-100 px-2 py-[14px] shadow-card">
      <h2 className="text-lg font-bold text-neutral-500 sm:text-xl">{title}</h2>
      <div className="flex-1 overflow-auto px-1">{children}</div>
    </div>
  )
}

export default TaskList
