import Image from "next/image"

const menuItems = [
  {
    icon: "/icons/dashboard.svg",
    alt: "dashboard icon",
    label: "Quadro",
  },
  {
    icon: "/icons/calendar.svg",
    alt: "list icon",
    label: "Lista",
  },
  {
    icon: "/icons/timeline.svg",
    alt: "timeline icon",
    label: "Timeline",
  },
  {
    icon: "/icons/calendar.svg",
    alt: "calendar icon",
    label: "Calendário",
  },
]

const Sidebar = () => {
  const viewSelected = 0

  return (
    <nav className="left-0 top-0 z-20 h-[100dvh] w-56 bg-white px-5 text-violet-800 shadow-nav sm:w-72 sm:px-[60px]">
      <div className="pt-14">
        <h1 className="text-center font-k2d text-3xl font-bold sm:text-4xl">
          TASKBAN
        </h1>
        <ul className="mt-[57px] space-y-[50px] text-base sm:text-xl">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              className={`flex cursor-pointer items-center space-x-5 ${
                viewSelected === index
                  ? "font-semibold text-violet-800"
                  : " text-neutral-500"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                style={{
                  filter:
                    viewSelected === index
                      ? "invert(32%) sepia(13%) saturate(4054%) hue-rotate(212deg) brightness(83%) contrast(99%)"
                      : "",
                }}
                width={25}
                height={25}
              />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
