"use client"

import { useState } from "react"
import { FileText, Book, Wrench, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CallForm() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [caller, setCaller] = useState("")
  const [reason, setReason] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [taskRows, setTaskRows] = useState([{ wo: "", reason: "", comments: "" }])

  const clearFields = () => {
    setCaller("")
    setReason("")
  }

  const showSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const addTaskRow = () => {
    setTaskRows([...taskRows, { wo: "", reason: "", comments: "" }])
  }

  const updateTaskRow = (index: number, field: string, value: string) => {
    const updatedRows = [...taskRows]
    updatedRows[index] = { ...updatedRows[index], [field]: value }
    setTaskRows(updatedRows)
  }

  const compendiumItems = [
    {
      title: "Types of Installation",
      content: [
        'Standard - 3/4" & 1" ---- Straight installation --- New payout from $200 to -$250',
        'Standard Large - 1 1/4" & 1 1/2" -- Still a straight installation -- New payout from $200 to -$275',
        'Premium Loop - 3/4" & 1" -- Payout before for the regular loop was $250 -- Now $300',
        'Premium Loop Large - 1 1/4" & 1 1/2" --- this was $300 before - Now $375 --',
      ],
    },
    {
      title: "Leaving VM",
      content: [
        "Good morning, [Name], this is Adrian with Frontdoor Pro, installation partner for Moen Flo. [Reason for the call]",
        "Feel free to call us back with any updates at (888) 826-8073 Thanks!",
        "VM Process",
        "- Leave VM",
        "- Open Text Request and send a message to the customer",
      ],
    },
    {
      title: "MOEN Customer Service",
      content: ["(844) 633-8356 MOEN Customer Service"],
    },
    {
      title: "Front Door Address",
      content: ["Frontdoor, Inc.", "3400 Players Club Parkway", "Suite 300", "Memphis, TN 38125"],
    },
    {
      title: "Troubleshooting Android/iOS",
      content: [
        "Android Clear Cache",
        "- Go To Settings And Select Apps",
        "- Select The Frontdoor App",
        "- Select Storage",
        "- Tap Clear Data & Cache",
        "- Re-Open The App",
        "",
        "iPhone Clear Cache",
        "- Go to Settings.",
        "- Go to General.",
        "- Now click on iPhone Storage.",
        "- Click on the Frontdoor App to empty its cache.",
        "- Click on Offload app and confirm the action.",
      ],
    },
    {
      title: "Certificate",
      content: [
        "Log in to the Flo by Moen user portal at www.user.meetflo.com",
        "Go to the Location Settings",
        "Download the free Insurance Verification Letter",
        "They can also find the free Insurance Verification Letter in the Location Settings of the Flo by Moen App",
        "We can also transfer them to (844) 633-8356 (Moen CS line)",
      ],
    },
  ]

  const templates = [
    "[Dispatcher] called to request the estimate to be sent to the client to be approved. Estimate sent for approval to client only.",
    "[Dispatcher] called to request for FITF to be invoiced.",
    "[Dispatcher] called to request a follow-up appt to be scheduled.",
    "[Dispatcher] called to request the estimate to be sent to the client to be approved and to request for FITF to be invoiced. Estimate sent for approval to client only.",
    "[Dispatcher] called requesting assistance in contacting the customer, as they were already on-site. We reached out to the customer and were able to get in touch, successfully requesting them to open the door.",
  ]

  const filteredCompendium = compendiumItems.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const contentMatch = item.content.some((line) => line.toLowerCase().includes(searchTerm.toLowerCase()))
    return titleMatch || contentMatch
  })

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-[#003b5d] text-[#83a5af] text-center py-3 font-bold text-xl fixed top-0 left-0 w-full h-[50px] z-10">
        Frontdoor Pro Support - Call Form
      </div>

      {/* Sidebar */}
      <div className="bg-[#002a44] text-[#83a5af] w-[60px] h-screen flex flex-col items-center pt-[70px] fixed left-0 top-0 z-10">
        <button
          onClick={() => showSection("templates")}
          className="bg-transparent border-none text-white text-2xl cursor-pointer my-5 p-1 relative group"
          aria-label="Templates for Notes"
        >
          <FileText size={24} />
          <span className="hidden group-hover:block absolute left-[50px] bg-black/70 text-white p-1 rounded text-sm whitespace-nowrap">
            Templates for Notes
          </span>
        </button>
        <button
          onClick={() => showSection("compendium")}
          className="bg-transparent border-none text-white text-2xl cursor-pointer my-5 p-1 relative group"
          aria-label="Compendium"
        >
          <Book size={24} />
          <span className="hidden group-hover:block absolute left-[50px] bg-black/70 text-white p-1 rounded text-sm whitespace-nowrap">
            Compendium
          </span>
        </button>
        <a
          href="https://docs.google.com/spreadsheets/d/16qYVVPSAR0LKBAsyJ_aHmesDnqRTCKKI/edit?gid=415346950#gid=415346950"
          className="bg-transparent border-none text-white text-2xl cursor-pointer my-5 p-1 relative group flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Plumber Cost Checker"
        >
          <Wrench size={24} />
          <span className="hidden group-hover:block absolute left-[50px] bg-black/70 text-white p-1 rounded text-sm whitespace-nowrap">
            Plumber Cost Checker
          </span>
        </a>
      </div>

      {/* Main Container */}
      <div className="flex justify-between w-[80%] mt-[70px] ml-[80px] p-4">
        {/* Left Section */}
        <div className="w-full md:w-[48%]">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold">Greeting</p>
          </div>
          <form>
            <p>Thank you for calling Frontdoor Pro Support, installation partner for Moen Flo.</p>
            <p>My name is Adrian, how can I help you?</p>
            <div className="flex items-center mb-2">
              <label htmlFor="caller" className="w-[120px] font-bold">
                Caller:
              </label>
              <Input
                type="text"
                id="caller"
                value={caller}
                onChange={(e) => setCaller(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-base focus:border-[#003b5d] focus:ring-[#003b5d]"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="reason" className="w-[120px] font-bold">
                Reason to call/Notes:
              </label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-base h-[100px] focus:border-[#003b5d] focus:ring-[#003b5d]"
              />
            </div>
            <Button
              type="button"
              onClick={clearFields}
              className="bg-[#003b5d] text-white border-none py-2 px-5 text-base rounded-[20px] cursor-pointer transition-colors hover:bg-[#005482]"
            >
              Clear
            </Button>

            {/* My Tasks Section */}
            <div className="mt-5">
              <p className="font-bold">My Tasks</p>
              <div>
                {taskRows.map((row, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <div className="flex-1 flex flex-col items-start mr-2">
                      <label className="text-sm">WO</label>
                      <Input
                        type="text"
                        value={row.wo}
                        onChange={(e) => updateTaskRow(index, "wo", e.target.value)}
                        className="h-[30px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start mr-2">
                      <label className="text-sm">Reason for FU</label>
                      <Input
                        type="text"
                        value={row.reason}
                        onChange={(e) => updateTaskRow(index, "reason", e.target.value)}
                        className="h-[30px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start">
                      <label className="text-sm">Comments</label>
                      <Input
                        type="text"
                        value={row.comments}
                        onChange={(e) => updateTaskRow(index, "comments", e.target.value)}
                        className="h-[30px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                onClick={addTaskRow}
                className="bg-[#003b5d] text-white border-none py-2 px-5 text-base rounded-[20px] cursor-pointer transition-colors hover:bg-[#005482] flex items-center gap-1"
              >
                <Plus size={16} /> Add Row
              </Button>
            </div>
          </form>
        </div>

        {/* Right Section - Installation Types */}
        {activeSection === "installation" && (
          <div className="w-full md:w-[48%]">
            <p className="font-bold">Types of Installation</p>
            <p>
              <strong>Standard installation</strong> $200
            </p>
            <p>
              <strong>Extended/Premium Installation</strong> $250
            </p>
          </div>
        )}

        {/* Compendium Section */}
        {activeSection === "compendium" && (
          <div className="w-full md:w-[48%]">
            <h3 className="text-lg font-bold">Search Compendium</h3>
            <div className="flex items-center mb-2">
              <label htmlFor="search-input" className="w-[120px] font-bold">
                Search:
              </label>
              <Input
                type="text"
                id="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-base focus:border-[#003b5d] focus:ring-[#003b5d]"
              />
            </div>
            {searchTerm && (
              <div className="mt-5">
                {filteredCompendium.map((item, index) => (
                  <div key={index} className="p-2 bg-gray-100 rounded mb-2">
                    <p className="font-bold">{item.title}</p>
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Templates Section */}
        {activeSection === "templates" && (
          <div className="w-full md:w-[48%]">
            <h3 className="text-lg font-bold">Templates for Notes</h3>
            <ul className="list-disc pl-5">
              {templates.map((template, index) => (
                <li key={index} className="mb-2">
                  {template}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

