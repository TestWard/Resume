"use client"

import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const handlePrint = () => {
    // Open the PDF file in a new tab
    window.open("/EdwardBasultoResume.pdf", "_blank")
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <h3 className="text-xl font-mono font-semibold mb-4">Get In Touch</h3>
        <div className="space-y-4">
          <a
            href="mailto:Edward.Basulto29@gmail.com"
            className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="font-mono">Edward.Basulto29@gmail.com</span>
          </a>
          <a
            href="https://github.com/edwardbasulto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="font-mono">github.com/edwardbasulto</span>
          </a>
          <a
            href="https://linkedin.com/in/edwardbasulto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="font-mono">linkedin.com/in/edwardbasulto</span>
          </a>
        </div>

        <div className="mt-6">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handlePrint}>
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <h3 className="text-xl font-mono font-semibold mb-4">Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-mono font-semibold">Florida International University</h4>
            <p className="text-zinc-400 mt-1">Miami, FL</p>
            <div className="mt-2">
              <p className="font-mono">Master of Science in Computer Science</p>
              <p className="text-zinc-400 text-sm">Graduated May 2024</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-mono font-semibold">Florida International University</h4>
            <p className="text-zinc-400 mt-1">Miami, FL</p>
            <div className="mt-2">
              <p className="font-mono">Bachelor of Arts in Computer Science</p>
              <p className="text-zinc-400 text-sm">Graduated May 2020</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-mono font-semibold mb-4">Languages</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono">English</span>
              <span className="text-emerald-400 font-mono">Fluent</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono">Spanish</span>
              <span className="text-emerald-400 font-mono">Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
