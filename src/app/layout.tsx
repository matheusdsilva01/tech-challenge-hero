import React from "react"
import { Libre_Franklin, K2D } from "next/font/google"
import { ToastContainer } from "react-toastify"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { TasksContextProvider } from "@/context/Tasks"
import type { Metadata } from "next"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
})

const fontK2D = K2D({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
  variable: "--font-k2d",
})

export const metadata: Metadata = {
  title: "Taskban",
  description: "Taskban is a simple kanban board to organize your tasks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${libreFranklin.variable} ${fontK2D.variable} flex flex-row font-sans`}
      >
        <TasksContextProvider>
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <main className="flex max-h-screen min-h-screen w-full flex-col overflow-auto">
            <Header />
            {children}
          </main>
        </TasksContextProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
