import { CheckCircle2, Clock3 } from "lucide-react"
import Badge from "../Badge"

interface TaskCardProps {
  title: string
  description: string
  date: string
  badgeType: "low" | "medium" | "high" | "finished"
}

const TaskCard = ({ badgeType, date, description, title }: TaskCardProps) => {
  const textColor =
    new Date(date) < new Date() ? "text-red-500" : "text-gray-500"
  return (
    <div className="min-h-[155px] w-full rounded-xl bg-white p-5 text-neutral-500 shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-ss font-medium">{description}</p>
      <div className="mt-5 flex w-full">
        {badgeType !== "finished" ? (
          <>
            <Clock3 className={textColor} width={24} />
            <span className={`ml-2.5 font-semibold ${textColor}`}>
              {new Date(date).toLocaleDateString("pt-BR")}
            </span>
            <Badge type={badgeType} className="ml-auto" />
          </>
        ) : (
          <>
            <CheckCircle2 className="text-lime-700" width={24} />
            <span className="ml-2.5 font-semibold text-lime-700">
              Finalizado
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskCard
