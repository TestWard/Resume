"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function PrintResume() {
  const handlePrint = () => {
    // Open the PDF file in a new tab
    window.open("/EdwardBasultoResume.pdf", "_blank")
  }

  return (
    <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handlePrint}>
      <FileText className="mr-2 h-4 w-4" />
      View Resume
    </Button>
  )
}
