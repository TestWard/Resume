"use client"

import { useState } from "react"
import { Bug, CheckCircle2, AlertTriangle, Code2, GitPullRequest, Workflow, Database } from "lucide-react"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("automation")

  return (
    <div className="border border-zinc-700 rounded-md bg-zinc-800/50">
      <div className="flex overflow-x-auto border-b border-zinc-700">
        <button
          onClick={() => setActiveTab("automation")}
          className={`px-4 py-3 font-mono text-sm whitespace-nowrap ${
            activeTab === "automation"
              ? "border-b-2 border-emerald-400 text-emerald-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Test Automation
        </button>
        <button
          onClick={() => setActiveTab("ci-cd")}
          className={`px-4 py-3 font-mono text-sm whitespace-nowrap ${
            activeTab === "ci-cd"
              ? "border-b-2 border-emerald-400 text-emerald-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Process Improvements
        </button>
        <button
          onClick={() => setActiveTab("impact")}
          className={`px-4 py-3 font-mono text-sm whitespace-nowrap ${
            activeTab === "impact"
              ? "border-b-2 border-emerald-400 text-emerald-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Business Impact
        </button>
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-3 font-mono text-sm whitespace-nowrap ${
            activeTab === "personal"
              ? "border-b-2 border-emerald-400 text-emerald-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Personal Projects
        </button>
      </div>

      <div className="p-6">
        {activeTab === "automation" && (
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Code2 className="h-6 w-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="text-xl font-mono font-semibold">Test Automation Achievements</h3>
                <p className="text-zinc-400 mt-1">
                  Key accomplishments in implementing and improving test automation frameworks
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 font-mono">
              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">Framework Development</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Developed robust test automation frameworks using C# and Selenium</p>
                  <p>- Implemented Page Object Model design pattern for maintainable test code</p>
                  <p>- Reduced test execution time by 50% through optimized test design</p>
                  <p>- Created reusable test components for common workflows</p>
                </div>
              </div>

              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold">Data-Driven Testing</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Implemented data-driven testing approaches for comprehensive coverage</p>
                  <p>- Created SQL queries for test data validation and verification</p>
                  <p>- Developed data cleanup procedures for test environment maintenance</p>
                  <p>- Automated test data generation for various test scenarios</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ci-cd" && (
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Workflow className="h-6 w-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="text-xl font-mono font-semibold">Process Optimization</h3>
                <p className="text-zinc-400 mt-1">
                  Significant improvements in testing processes and workflows
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 font-mono">
              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">CI/CD Integration</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Integrated automated tests into Azure DevOps pipelines</p>
                  <p>- Implemented parallel test execution for faster feedback</p>
                  <p>- Created detailed test reports for stakeholder visibility</p>
                  <p>- Reduced deployment cycle time through automated testing</p>
                </div>
              </div>

              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="h-5 w-5 text-red-400" />
                  <span className="font-semibold">Quality Improvements</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Established comprehensive bug tracking and reporting processes</p>
                  <p>- Implemented test case management best practices</p>
                  <p>- Created documentation standards for test cases and bugs</p>
                  <p>- Improved bug detection and resolution time</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "impact" && (
          <div>
            <div className="flex items-start gap-3 mb-4">
              <GitPullRequest className="h-6 w-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="text-xl font-mono font-semibold">Business Impact</h3>
                <p className="text-zinc-400 mt-1">
                  Measurable improvements and business value delivered
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 font-mono">
              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">Efficiency Gains</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Reduced manual testing effort by 70% through automation</p>
                  <p>- Decreased regression testing time from days to hours</p>
                  <p>- Improved test coverage across critical business flows</p>
                  <p>- Enhanced team productivity through tool development</p>
                </div>
              </div>

              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">Quality Metrics</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- Reduced production defects by 40% through improved testing</p>
                  <p>- Increased test automation coverage to 80% for core features</p>
                  <p>- Improved mean time to detect (MTTD) for critical issues</p>
                  <p>- Enhanced overall product quality and reliability</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "personal" && (
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Code2 className="h-6 w-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="text-xl font-mono font-semibold">Personal Projects</h3>
                <p className="text-zinc-400 mt-1">
                  Independent projects showcasing technical skills and creativity
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 font-mono">
              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">ReadersTavern</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- A book club-inspired social media platform built with Next.js and PostgreSQL</p>
                  <p>- Features include authentication, user profiles, and interactive book threads</p>
                  <p>- Enables users to create book collections and join discussions</p>
                  <p>- <a href="https://readerstavern.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">View Project</a></p>
                </div>
              </div>

              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">Online Resume Website</span>
                </div>
                <div className="pl-7 text-sm text-zinc-300 space-y-1">
                  <p>- A modern, responsive online resume portfolio created using Next.js</p>
                  <p>- Features dynamic data handling and sleek frontend design</p>
                  <p>- Serves as a live portfolio showcasing experience, skills, and technical projects</p>
                  <p>- <a href="https://edward-basulto-resume.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">You're already here!</a></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
