import Link from "next/link"
import { Terminal } from "lucide-react"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import TerminalHeader from "@/components/terminal-header"
import BugAnimation from "@/components/bug-animation"
import PrintResume from "@/components/print-resume"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 pb-20 relative overflow-hidden">
      {/* Animated Bugs */}
      <BugAnimation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <TerminalHeader />

        <div className="mt-8 border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-8 w-8 text-emerald-400" />
            <h1 className="text-3xl font-mono font-bold text-emerald-400">Edward Basulto</h1>
          </div>

          <div className="font-mono">
            <p className="text-xl mb-4">
              <span className="text-emerald-400">$</span> <span className="text-purple-400">cat</span> about.txt
            </p>
            <div className="pl-4 border-l-2 border-zinc-700 mb-6">
              <p className="mb-2">Software Development Engineer in Test (SDET)</p>
              <p className="text-zinc-400">
                Experienced Software Automation Engineer with a strong foundation in automation and test-driven
                development. Skilled in Python, C#, Java, and SQL with over 5 years of experience ensuring the quality
                and reliability of software.
              </p>
            </div>

            <p className="text-xl mb-4">
              <span className="text-emerald-400">$</span> <span className="text-purple-400">grep</span> -r "location" .
            </p>
            <div className="pl-4 border-l-2 border-zinc-700 mb-6">
              <p className="mb-1">
                <span className="text-yellow-400">./contact.json:</span> "Coconut Creek, FL 33066"
              </p>
              <p className="mb-1">
                <span className="text-yellow-400">./contact.json:</span> "(786) 536-0954"
              </p>
              <p>
                <span className="text-yellow-400">./contact.json:</span> "Edward.Basulto29@gmail.com"
              </p>
            </div>

            <p className="text-xl mb-4">
              <span className="text-emerald-400">$</span> <span className="text-purple-400">grep</span> -r "expertise" .
            </p>
            <div className="pl-4 border-l-2 border-zinc-700">
              <p className="mb-1">
                <span className="text-yellow-400">./skills.json:</span> "Automation Testing"
              </p>
              <p className="mb-1">
                <span className="text-yellow-400">./skills.json:</span> "Test-Driven Development"
              </p>
              <p className="mb-1">
                <span className="text-yellow-400">./skills.json:</span> "CI/CD Implementation"
              </p>
              <p className="mb-1">
                <span className="text-yellow-400">./skills.json:</span> "Python, C#, Java"
              </p>
              <p>
                <span className="text-yellow-400">./skills.json:</span> "SQL & Database Testing"
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#skills"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors"
            >
              View Skills
            </Link>
            <Link
              href="#experience"
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors"
            >
              Contact
            </Link>
            <PrintResume />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-mono font-bold mb-8 text-emerald-400">
          <span className="text-zinc-400">#</span> Skills & Expertise
        </h2>
        <SkillsSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-12 bg-zinc-800/30">
        <h2 className="text-2xl font-mono font-bold mb-8 text-emerald-400">
          <span className="text-zinc-400">#</span> Work Experience
        </h2>
        <ExperienceSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-mono font-bold mb-8 text-emerald-400">
          <span className="text-zinc-400">#</span> Professional Achievements
        </h2>
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12 bg-zinc-800/30">
        <h2 className="text-2xl font-mono font-bold mb-8 text-emerald-400">
          <span className="text-zinc-400">#</span> Contact
        </h2>
        <ContactSection />
      </section>
    </main>
  )
}
