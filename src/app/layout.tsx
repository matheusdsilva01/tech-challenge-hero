import React from "react"
import { Libre_Franklin, K2D } from "next/font/google"
import Image from "next/image"
import Header from "@/components/header"
import { TasksContextProvider } from "@/context/tasks"
import type { Metadata } from "next"
import "./globals.css"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-libre-franklin",
})

const fontK2D = K2D({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
  variable: "--font-k2d",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default async function RootLayout({
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
          <nav className="left-0 top-0 z-20 h-[100dvh] w-72 bg-white px-[60px] text-violet-800 shadow-nav">
            <div className="mt-14">
              <h1 className="text-center font-k2d text-4xl font-bold">
                TASKBAN
              </h1>
              <ul className="mt-[57px] space-y-[50px] text-xl">
                <li className="flex cursor-pointer items-center space-x-5 font-semibold text-violet-800">
                  <Image
                    src="/icons/dashboard.svg"
                    alt="dashboard icon"
                    style={{
                      filter:
                        "invert(32%) sepia(13%) saturate(4054%) hue-rotate(212deg) brightness(83%) contrast(99%)",
                    }}
                    width={25}
                    height={25}
                  />
                  <p>Quadro</p>
                </li>
                <li className="flex cursor-pointer items-center space-x-5 text-neutral-500">
                  <Image
                    src="/icons/calendar.svg"
                    alt="list icon"
                    width={25}
                    height={25}
                  />
                  <p>Lista</p>
                </li>
                <li className="flex cursor-pointer items-center space-x-5 text-neutral-500">
                  <Image
                    src="/icons/timeline.svg"
                    alt="timeline icon"
                    width={25}
                    height={25}
                  />
                  <p>Timeline</p>
                </li>
                <li className="flex cursor-pointer items-center space-x-5 text-neutral-500">
                  <Image
                    src="/icons/calendar.svg"
                    alt="calendar icon"
                    width={25}
                    height={25}
                  />
                  <p>Calendário</p>
                </li>
              </ul>
            </div>
          </nav>
          <main className="max-h-screen flex-1 overflow-auto">
            <Header />
            {children}
          </main>
        </TasksContextProvider>
      </body>
    </html>
  )
}
