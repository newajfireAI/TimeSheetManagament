"use client";
import { useRef, useState } from "react";
import SettingsLayout from '../../SettingsLayout'
import { FaPlus } from "react-icons/fa6";
import Table from "@/components/Table";
import Link from "next/link";

export default function TamplateSetting() {
  const items = [
    {
      No: "01",
      TemplateName: "Default Template",
      TemplateType: "Timesheet submission, {{start_date}} To {{end_date}}",
      Subject: "Timesheet submission for period {{start_date}} To {{end_date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "02",
      TemplateName: "Leave Request",
      TemplateType: "Leave approval, {{start_date}} To {{end_date}}",
      Subject: "Leave request submitted by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "03",
      TemplateName: "Expense Claim",
      TemplateType: "Expense submission, {{month}} {{year}}",
      Subject: "Expense claim report from {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "04",
      TemplateName: "Attendance Alert",
      TemplateType: "Attendance reminder, {{month}} {{year}}",
      Subject: "Attendance reminder for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "05",
      TemplateName: "Profile Update",
      TemplateType: "Profile change notification",
      Subject: "Profile updated by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "06",
      TemplateName: "Password Reset",
      TemplateType: "Account security",
      Subject: "Password reset requested by {{user_email}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "07",
      TemplateName: "Overtime Notice",
      TemplateType: "Overtime submission, {{date}}",
      Subject: "Overtime request from {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "08",
      TemplateName: "Performance Review",
      TemplateType: "Review cycle, {{start_date}} To {{end_date}}",
      Subject: "Performance review for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "09",
      TemplateName: "System Notification",
      TemplateType: "System alert",
      Subject: "System maintenance scheduled for {{date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "10",
      TemplateName: "Training Schedule",
      TemplateType: "Training session, {{training_title}}",
      Subject: "Training session invitation for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "11",
      TemplateName: "Meeting Reminder",
      TemplateType: "Calendar event",
      Subject: "Upcoming meeting with {{team_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "12",
      TemplateName: "Holiday Announcement",
      TemplateType: "Company notice",
      Subject: "Official holiday on {{holiday_date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "13",
      TemplateName: "Account Activation",
      TemplateType: "System email",
      Subject: "Activate your account, {{user_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "14",
      TemplateName: "Policy Update",
      TemplateType: "Internal notice",
      Subject: "New company policy effective from {{date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "15",
      TemplateName: "Shift Change",
      TemplateType: "Work schedule, {{date}}",
      Subject: "Shift changed for {{employee_name}} on {{date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "16",
      TemplateName: "Document Upload",
      TemplateType: "Document submission",
      Subject: "New document uploaded by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "17",
      TemplateName: "KPI Report",
      TemplateType: "Performance summary, {{month}} {{year}}",
      Subject: "KPI report generated for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "18",
      TemplateName: "Security Alert",
      TemplateType: "System security",
      Subject: "Unusual login activity detected for {{user_email}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "19",
      TemplateName: "Contract Renewal",
      TemplateType: "Contract notice",
      Subject: "Contract renewal due for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "20",
      TemplateName: "Feedback Request",
      TemplateType: "Feedback form",
      Subject: "Feedback requested from {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "21",
      TemplateName: "Attendance Correction",
      TemplateType: "Correction request, {{date}}",
      Subject: "Attendance correction submitted by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "22",
      TemplateName: "Salary Slip",
      TemplateType: "Monthly salary, {{month}} {{year}}",
      Subject: "Salary slip available for {{month}} {{year}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "23",
      TemplateName: "Onboarding Reminder",
      TemplateType: "HR onboarding",
      Subject: "Onboarding schedule for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "24",
      TemplateName: "Offboarding Process",
      TemplateType: "HR process",
      Subject: "Offboarding started for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "25",
      TemplateName: "Travel Request",
      TemplateType: "Travel approval, {{destination}}",
      Subject: "Travel request submitted by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "26",
      TemplateName: "Reimbursement Update",
      TemplateType: "Finance update",
      Subject: "Reimbursement approved for {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "27",
      TemplateName: "Project Completion",
      TemplateType: "Project status",
      Subject: "Project {{project_name}} marked as completed",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "28",
      TemplateName: "Equipment Request",
      TemplateType: "Inventory system",
      Subject: "New equipment request by {{employee_name}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "29",
      TemplateName: "Promotion Notice",
      TemplateType: "HR announcement",
      Subject: "Congratulations! {{employee_name}} promoted to {{new_position}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    },
    {
      No: "30",
      TemplateName: "System Downtime",
      TemplateType: "System maintenance",
      Subject: "Scheduled system downtime on {{date}}",
      Permission: ["Admin", "User", "Supervisor"],
      Action: "View"
    }
  ]

  const [viewTamplate, setViewTamplate] = useState(false)
  const clieckref = useRef(null)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const permission = [
    {
      Role: "admin"
    },
    {
      Role: "User"
    },
    {
      Role: "Supervisor"
    },
  ]

  const TableHeads = [
    { Title: "No", key:"No", width: '5%' },
    { Title: "Template name",key:"TemplateName", width: '20%' },
    { Title: "Template type",key:"TemplateType", width: '15%' },
    { Title: "Subject",key:"Subject", width: '20%' },
    { Title: "Permission",key:"Permission", width: '40%', render: (row) => <span className="text-blue-500">{row.Role}</span> },
    { Title: "Action",key:"Action", width: '40%' },
  ];

  const hendleClickOutSite = (e) => {
    if (clieckref.current.contains(e.target) === false) {
      setViewTamplate(false)
    }
  }
  return (
    <>

      <SettingsLayout>
        <div>
          <div className='flex justify-end'>
            <button className='bg-[#5069E5] text-sm text-[#ffffff] px-3 py-2  rounded-sm'>
              <Link href='/settings/template/createTemplate' className='flex items-center gap-4'>
            <FaPlus /> Create template
            </Link>
            </button>
          </div>

          <div>

            <Table TableHeads={TableHeads} TableRows={currentItems}>
              {
                permission.map((role, idx) =>
                  <span key={idx} className={`${role.Role === "admin" && "text-[#E5D416] bg-[#FFFEF5]"} ${role.Role === "User" && "text-[#5069E5] bg-[#F7F9FF]"} ${role.Role === "Supervisor" && "text-[#1B654A] bg-[#F7FFFC]"} px-2 py-1 rounded-full mx-2`}>{role.Role}</span>
                )
              }
            </Table>



            {/* <table className='w-full my-6'>
              <thead className='' >
                <tr className='bg-[#D9DFFF] w-full '>
                  <th className='text-center border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl rounded-tl-2xl w-[4%]'>No</th>
                  <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Template name </th>
                  <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[30%]'>Template type</th>
                  <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[30%]'>Subject</th>
                  <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Permission</th>
                  <th className='text-center border-b-3 border-[#F0F0F2] font-medium py-[22px]  rounded-b-xl rounded-tr-2xl w-[6%]'>Action</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {
                  currentItems.map((item, idx) =>
                    <tr key={idx} >
                      <td className='border-b-3 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-center'>{item.No}</td>
                      <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.TemplateName}</td>
                      <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.TemplateType}</td>
                      <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Subject}</td>
                      <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>

                      </td>
                      <td onClick={() => setViewTamplate(true)} className='border-b-3 border-[#F0F0F2] py-[22px] rounded-xl p-2 text-center text-[#0D2080]'>View</td>
                    </tr>
                  )
                }


              </tbody>
            </table> */}

          </div>

          <div className='mb-10 py-6'>

            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 rounded-md bg-[#D9DFFF] disabled:bg-[#DFE0E5]"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 transition ${currentPage === i + 1
                    ? "bg-[#D9DFFF] text-black rounded-full"
                    : "hover:bg-white border border-[#CED2E5] hover:rounded-full rounded-sm  duration-300"
                    }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 rounded-md bg-[#D9DFFF] disabled:bg-[#DFE0E5]"
              >
                Next
              </button>
            </div>

          </div>
        </div>
      </SettingsLayout>

      <div onClick={hendleClickOutSite} className={`w-screen h-screen ${!viewTamplate && 'hidden'}  ${viewTamplate && 'absolute top-0 left-0 z-auto'} flex justify-center items-center shadow-2xl bg-[#00000052] `}>
        <div ref={clieckref} className='bg-white w-[427px] h-[294px] p-12 rounded-[8px] shadow '>
          <div className="text-black">
            <h2>
              Hello,
              <br />Timesheet is submit for client : client_name
              <br />for time period: start_date To end_date
              <br /> Please check and approve.
              <br />Thank you.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
