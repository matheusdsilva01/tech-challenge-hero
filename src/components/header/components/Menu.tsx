"use client"
import { useEffect, useState } from "react"
import { MenuIcon, X } from "lucide-react"
import Sidebar from "@/components/sidebar"

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    function closeSidebar(e: KeyboardEvent) {
      if (e.key === "Escape" || showSidebar) {
        setShowSidebar(false)
      }
    }
    window.addEventListener("keydown", closeSidebar)
    return () => window.removeEventListener("keydown", closeSidebar)
  }, [])

  return (
    <>
      <button
        className="block xl:hidden"
        type="button"
        onClick={() => setShowSidebar(prev => !prev)}
      >
        <MenuIcon size={24} strokeWidth={3} className="text-violet-300" />
      </button>
      <div
        onClick={() => setShowSidebar(prev => !prev)}
        className={`absolute left-0 top-0 z-20 w-full ${
          showSidebar ? "block" : "hidden"
        }  xl:hidden`}
      >
        <div className="relative w-fit" onClick={e => e.stopPropagation()}>
          <Sidebar />
          <X
            onClick={() => setShowSidebar(prev => !prev)}
            size={24}
            strokeWidth={3}
            className="absolute right-2 top-2 cursor-pointer text-zinc-800"
          />
        </div>
      </div>
    </>
  )
}

export default Menu
