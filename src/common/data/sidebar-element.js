import React from "react"
import { Redirect } from "react-router-dom"

const authProtectedContent = [
  {
    path: "/dashboard",
    id: "Dashboard",
    allowedPermissions: [],
    className: "bx bx-home-circle",
    contextId: "Dashboard",
    children: [],
  },

  //chat
  // { path: "/chat", id:"Chat", allowedPermissions:["view"], className:"bx-chat", contextId:"Chat", children:[]},

  // //calendar
  {
    path: "/#",
    id: "Calendar",
    allowedPermissions: [],
    className: "bx-calendar",
    contextId: "Calendar",
    children: [
      {
        path: "/calendar",
        id: "Calendar",
        contextId: "Calendar",
        allowedPermissions: [],
        className: "",
        children: [],
      },
      {
        path: "/calendar-admin-request",
        id: "CalendarAdminRequest",
        contextId: "CalendarAdminRequest",
        allowedPermissions: ["admin"],
        className: "",
        children: [],
      },
      {
        path: "/calendar-user-request",
        id: "CalendarUserRequest",
        contextId: "CalendarUserRequest",
        allowedPermissions: [],
        className: "",
        children: [],
      },
    ],
  },

  // //profile
  // { path: "/profile", id:"Profile", allowedPermissions: ["view"], className:"bx-calendar", contextId:"Profile", children:[]},

  //Projects
  {
    path: "/#",
    id: "Project",
    allowedPermissions: [],
    contextId: "Projects",
    className: "bx-briefcase-alt-2",
    children: [
      {
        path: "/projects-list",
        id: "Project",
        allowedPermissions: [],
        contextId: "Projects List",
        className: "",
        children: [],
      },
      {
        path: "/projects-create",
        id: "Project",
        allowedPermissions: [],
        contextId: "Create New",
        className: "",
        children: [],
      },
    ],
  },

  // Tasks
  {
    path: "/#",
    id: "Task",
    allowedPermissions: [],
    className: "bx-task",
    contextId: "Tasks",
    children: [
      {
        path: "/tasks-list",
        id: "Task",
        contextId: "Task List",
        allowedPermissions: [],
        className: "",
        children: [],
      },
      {
        path: "/tasks-create",
        id: "Task",
        contextId: "Create Task",
        allowedPermissions: [],
        className: "",
        children: [],
      },
    ],
  },

  //Blog
  // { path: "/#", id:"Blog", allowedPermissions: ["view"], className:"bxs-detail", contextId:"Blog",
  //   children:[
  //     { path: "/blog-list", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog List", children:[] },
  //     { path: "/blog-grid", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog Grid", children:[] },
  //     { path: "/blog-details", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog Details", children:[] },
  //   ]
  // },

  // Contacts
  // { path: "/#", id:"Contact", allowedPermissions: ["view"], className:"bxs-user-detail", contextId:"Contacts",
  //   children:[
  //     { path: "/contacts-grid", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"User Grid", children:[] },
  //     { path: "/contacts-list", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"User List", children:[] },
  //     { path: "/contacts-profile", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"Profile", children:[] },
  //   ]
  // },
]

const adminContent = [
  // staff
  {
    path: "/#",
    id: "StaffManager",
    allowedPermissions: ["view"],
    className: "bxs-user-detail",
    contextId: "Staff Manager",
    children: [
      {
        path: "/location-manager",
        id: "Location",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "Location",
        children: [],
      },
      {
        path: "/team-manager",
        id: "Team",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "Team",
        children: [],
      },
      {
        path: "/staff-manager",
        id: "Staff",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "Staff",
        children: [],
      },
    ],
  },

  {
    path: "/#",
    id: "ScanDevice",
    allowedPermissions: ["view"],
    className: "bx bx-barcode",
    contextId: "Scan Device Manager",
    children: [
      {
        path: "/scan-device",
        id: "Scandevice",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "Scan Device",
        children: [],
      },
    ],
  },

  {
    path: "/#",
    id: "CalendarAdmin",
    allowedPermissions: ["view"],
    className: "bx bx-cog",
    contextId: "Settings",
    children: [
      {
        path: "/edit-general",
        id: "Holiday",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "General",
        children: [],
      },
      {
        path: "/edit-holiday",
        id: "Holiday",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "Holiday",
        children: [],
      },
      {
        path: "/IPlist",
        id: "IPList",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "IPList",
        children: [],
      },
      {
        path: "/email-setting",
        id: "EmailSetting",
        allowedPermissions: ["edit"],
        className: "",
        contextId: "EmailSetting",
        children: [],
      },
    ],
  },

  
]

export { authProtectedContent, adminContent }
