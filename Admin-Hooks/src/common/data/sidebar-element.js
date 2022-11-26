import React from "react"
import { Redirect } from "react-router-dom"

const authProtectedContent = [
  { path: "/dashboard", id:"Dashboard", allowedPermissions:["view"], className:"", contextId:"Dashboard", children:[]},

  //chat
  { path: "/chat", id:"Chat", allowedPermissions:["view"], className:"bx-chat", contextId:"Chat", children:[]},

  // //calendar
  { path: "/calendar", id:"Calendar", allowedPermissions: ["view"], className:"bx-calendar", contextId:"Calendar", children:[]},

  // //profile
  // { path: "/profile", id:"Profile", allowedPermissions: ["view"], className:"bx-calendar", contextId:"Profile", children:[]},

  // Tasks
  { path: "/#", id:"Task", allowedPermissions: ["view"], className:"bx-task", contextId:"Tasks",
    children:[
      { path: "/tasks-list", id:"Task", contextId:"Task List", allowedPermissions: ["view"], className:"", children:[]},
      { path: "/tasks-create", id:"Task", contextId:"Create Task", allowedPermissions: ["edit"], className:"", children:[]}
    ]
  },
  

  //Projects
  { path: "/#", id:"Project", allowedPermissions: ["view"], contextId:"Projects", className:"bx-briefcase-alt-2", 
      children:[
        { path: "/projects-grid", id:"Project", allowedPermissions: ["view"], contextId:"Projects Grid", className:"", children:[] },
        { path: "/projects-list", id:"Project", allowedPermissions: ["view"], contextId:"Projects List", className:"", children:[] },
        { path: "/projects-overview", id:"Project", allowedPermissions: ["view"], contextId:"Project Overview", className:"", children:[] },
        { path: "/projects-create", id:"Project", allowedPermissions: ["edit"], contextId:"Create New", className:"", children:[] }
      ]
  },
  

  //Blog
  { path: "/#", id:"Blog", allowedPermissions: ["view"], className:"bxs-detail", contextId:"Blog", 
    children:[
      { path: "/blog-list", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog List", children:[] },
      { path: "/blog-grid", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog Grid", children:[] },
      { path: "/blog-details", id:"Blog", allowedPermissions: ["view"], className:"", contextId:"Blog Details", children:[] },
    ] 
  },


  // Contacts
  { path: "/#", id:"Contact", allowedPermissions: ["view"], className:"bxs-user-detail", contextId:"Contacts", 
    children:[
      { path: "/contacts-grid", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"User Grid", children:[] },
      { path: "/contacts-list", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"User List", children:[] },
      { path: "/contacts-profile", id:"Contact", allowedPermissions: ["view"], className:"", contextId:"Profile", children:[] },
    ] 
  },

]

const adminContent = [
    // staff
    { path: "/#", id:"StaffManager", allowedPermissions: ["view"], className:"bxs-user-detail", contextId:"Staff Manager", 
      children:[
        { path: "/team-manager", id:"Team", allowedPermissions: ["edit"], className:"", contextId:"Team", children:[] },
        { path: "/staff-manager", id:"Staff", allowedPermissions: ["edit"], className:"", contextId:"Staff", children:[] },
      ] 
    },

    { path: "/#", id:"ScanDevice", allowedPermissions: ["view"], className:"bx bx-barcode", contextId:"Scan Device Manager", 
      children:[
        { path: "/scan-device", id:"Scandevice", allowedPermissions: ["edit"], className:"", contextId:"Scan Device", children:[] },
      ] 
    },
]

export { authProtectedContent, adminContent}
