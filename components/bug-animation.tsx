"use client"

import { useEffect, useState } from "react"
import { Bug } from "lucide-react"

type BugProps = {
  id: number
  x: number
  y: number
  size: number
  speed: number
  direction: number
  color: string
}

export default function BugAnimation() {
  const [bugs, setBugs] = useState<BugProps[]>([])
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Create bugs
    const newBugs: BugProps[] = []
    const bugCount = Math.min(Math.floor(window.innerWidth / 300), 8) // Responsive bug count

    for (let i = 0; i < bugCount; i++) {
      newBugs.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 15,
        speed: Math.random() * 2 + 1,
        direction: Math.random() * Math.PI * 2,
        color: i % 3 === 0 ? "text-emerald-400" : i % 3 === 1 ? "text-red-400" : "text-yellow-400",
      })
    }

    setBugs(newBugs)

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (bugs.length === 0) return

    const interval = setInterval(() => {
      setBugs((prevBugs) =>
        prevBugs.map((bug) => {
          // Change direction occasionally
          const newDirection =
            Math.random() < 0.05 ? bug.direction + ((Math.random() - 0.5) * Math.PI) / 2 : bug.direction

          // Calculate new position
          let newX = bug.x + Math.cos(newDirection) * bug.speed
          let newY = bug.y + Math.sin(newDirection) * bug.speed

          // Bounce off walls
          let finalDirection = newDirection
          if (newX < 0 || newX > windowSize.width) {
            finalDirection = Math.PI - newDirection
            newX = bug.x // Prevent getting stuck in walls
          }
          if (newY < 0 || newY > windowSize.height) {
            finalDirection = -newDirection
            newY = bug.y // Prevent getting stuck in walls
          }

          return {
            ...bug,
            x: newX,
            y: newY,
            direction: finalDirection,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [bugs, windowSize])

  return (
    <>
      {bugs.map((bug) => (
        <div
          key={bug.id}
          className={`absolute pointer-events-none ${bug.color} animate-pulse`}
          style={{
            left: `${bug.x}px`,
            top: `${bug.y}px`,
            transform: `rotate(${(bug.direction * 180) / Math.PI}deg)`,
            transition: "left 0.05s linear, top 0.05s linear, transform 0.2s ease-out",
            zIndex: 10,
          }}
        >
          <Bug size={bug.size} />
        </div>
      ))}
    </>
  )
}
