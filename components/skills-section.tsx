import { CheckCircle, Code, GitBranch, Database, Terminal, Bug } from "lucide-react"

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex items-center gap-3 mb-4">
          <Code className="h-6 w-6 text-emerald-400" />
          <h3 className="text-xl font-mono font-semibold">Programming Languages</h3>
        </div>
        <div className="space-y-3 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>C#</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Java</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>HTML/CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>PowerShell, Bash</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex items-center gap-3 mb-4">
          <Bug className="h-6 w-6 text-emerald-400" />
          <h3 className="text-xl font-mono font-semibold">Test Automation</h3>
        </div>
        <div className="space-y-3 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Selenium WebDriver</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Playwright</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>.NET Framework</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>NUnit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Page Object Model (POM)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>ReSharper</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex items-center gap-3 mb-4">
          <Database className="h-6 w-6 text-emerald-400" />
          <h3 className="text-xl font-mono font-semibold">Database & Tools</h3>
        </div>
        <div className="space-y-3 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>SQL</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>SQL Server Management Studio</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Database Testing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Data Validation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Query Optimization</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex items-center gap-3 mb-4">
          <GitBranch className="h-6 w-6 text-emerald-400" />
          <h3 className="text-xl font-mono font-semibold">CI/CD & Version Control</h3>
        </div>
        <div className="space-y-3 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Azure DevOps (Pipelines)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Git</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Bitbucket</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Azure DevOps (Repositories)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Continuous Integration</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50 md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <h3 className="text-xl font-mono font-semibold">Project Management & Methodologies</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>JIRA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Asana</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>TestRail</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>ALM</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Agile Scrum</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Kanban</span>
          </div>
        </div>
      </div>
    </div>
  )
}
