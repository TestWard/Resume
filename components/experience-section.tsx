import { Calendar, Building2, MapPin } from "lucide-react"

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-mono font-semibold">Software Development Engineer in Test</h3>
            <div className="flex items-center gap-2 text-zinc-400 mt-1">
              <Building2 className="h-4 w-4" />
              <span>Security Service Federal Credit Union</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar className="h-4 w-4" />
              <span>August 2024 - Present</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <p>
            • Utilized Azure DevOps to run test suites, monitor pipelines, and ensure all components were functioning as
            expected
          </p>
          <p>
            • Migrated an existing Selenium-based test suite to Playwright, improving execution speed, stability, and reducing flakiness
          </p>
          <p>• Developed tools to test the software more effectively, improving test coverage and efficiency</p>
          <p>
            • Utilized SQL Server Management Studio (SSMS) to access the database, input data, and ensure automation
            tests pulled accurate data for validation
          </p>
          <p>
            • Followed the Page Object Model (POM) design pattern to structure and maintain automation test scripts
            efficiently
          </p>
          <p>
            • Automated API calls to retrieve and modify member data, simulating changes without direct access to production databases
          </p>
          <p>
            • Developed custom API tests to compare data between the backend and frontend, ensuring data consistency and accuracy displayed on the user interface
          </p>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-mono font-semibold">Software Quality Assurance Engineer II</h3>
            <div className="flex items-center gap-2 text-zinc-400 mt-1">
              <Building2 className="h-4 w-4" />
              <span>UKG (Ultimate Kronos Group)</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar className="h-4 w-4" />
              <span>May 2023 - July 2024</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="h-4 w-4" />
              <span>Weston, FL</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <p>
            • Collaborated with development teams to design and implement code fixes for SaaS applications,
            significantly reducing bug resolution time
          </p>
          <p>
            • Designed, developed, and maintained automated test suites in C# utilizing the .NET framework and Page
            Object Model, significantly improving test coverage, efficiency, and execution frequency
          </p>
          <p>• Leveraged SQL for data manipulation, ensuring the accuracy of test environments and scenarios</p>
          <p>• Implemented fixes into the Continuous Integration system, increasing efficiency by over 25%</p>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-mono font-semibold">Quality Assurance Analyst</h3>
            <div className="flex items-center gap-2 text-zinc-400 mt-1">
              <Building2 className="h-4 w-4" />
              <span>Tyler Technologies</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar className="h-4 w-4" />
              <span>December 2021 - May 2023</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="h-4 w-4" />
              <span>Remote</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <p>• Led the implementation of Tyler Assurance, a test automation tool using C# and Selenium</p>
          <p>
            • Refined code and scripts for testing applications, contributing directly to product enhancements and
            feature development
          </p>
          <p>
            • Automated and manually tested regression stories using Python scripts, enabling the QA team to focus on
            current issues
          </p>
          <p>• Developed and maintained comprehensive documentation for data processes, systems, and applications</p>
          <p>
            • Conducted user acceptance testing (UAT) to validate feature implementation and ensure alignment with
            customer requirements
          </p>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-mono font-semibold">Quality Assurance Automation Engineer</h3>
            <div className="flex items-center gap-2 text-zinc-400 mt-1">
              <Building2 className="h-4 w-4" />
              <span>DataRemote Inc.</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar className="h-4 w-4" />
              <span>November 2020 - December 2021</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="h-4 w-4" />
              <span>Miami, FL</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <p>
            • Designed and executed automation scripts using Selenium and Python, reducing manual testing time by 50%
          </p>
          <p>
            • Actively participated in the development and refinement of new features and applications within an Agile
            framework
          </p>
          <p>• Manually tested Linux-based applications running on remote servers</p>
        </div>
      </div>
    </div>
  )
}
