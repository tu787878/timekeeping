import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

// //Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksCreate from "../pages/Tasks/tasks-create"

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Blog
import BlogList from "../pages/Blog/BlogList/index"
import BlogGrid from "../pages/Blog/BlogGrid/index"
import BlogDetails from "../pages/Blog/BlogDetails"

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import PermissionDenied from "../pages/Utility/permission-denied"

//Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid"
import ContactsList from "../pages/Contacts/ContactList/contacts-list"
import ContactsProfile from "../pages/Contacts/ContactsProfile/contacts-profile"


// admin
import TeamManager from "../pages/admin/ContactList/contacts-list"
import StaffManager from "../pages/admin/Staff/contacts-list"
import NewStaff from "../pages/admin/Staff/new-staff"
import ScanDevice from "../pages/admin/scan-device/index"
import SocketConfig from "../components/socket/socket"


const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard , id:"Dashboard", allowedPermissions:["view"], className:"", contextId:"Dashboard"},

  //chat
  { path: "/chat", component: Chat, id:"Chat", allowedPermissions:["view"], className:"bx-chat", contextId:"Chat"},

  // //calendar
  { path: "/calendar", component: Calendar, id:"Calendar", allowedPermissions: ["view"], className:"bx-calendar", contextId:"Calendar"},

  // //profile
  { path: "/profile", component: UserProfile, id:"Profile", allowedPermissions: ["view"]},

  // Tasks
  { path: "/tasks-list", component: TasksList, id:"Task", allowedPermissions: ["view"]},
  { path: "/tasks-create", component: TasksCreate, id:"Task", allowedPermissions: ["edit"]},

  //Projects
  { path: "/projects-grid", component: ProjectsGrid, id:"Project", allowedPermissions: ["view"] },
  { path: "/projects-list", component: ProjectsList, id:"Project", allowedPermissions: ["view"] },
  { path: "/projects-overview", component: ProjectsOverview, id:"Project", allowedPermissions: ["view"] },
  { path: "/projects-overview/:id", component: ProjectsOverview, id:"Project", allowedPermissions: ["view"] },
  { path: "/projects-create", component: ProjectsCreate, id:"Project", allowedPermissions: ["edit"] },

  //Blog
  { path: "/blog-list", component: BlogList, id:"Blog", allowedPermissions: ["view"] },
  { path: "/blog-grid", component: BlogGrid, id:"Blog", allowedPermissions: ["view"] },
  { path: "/blog-details", component: BlogDetails, id:"Blog", allowedPermissions: ["view"] },

  // Contacts
  { path: "/contacts-grid", component: ContactsGrid, id:"Contact", allowedPermissions: ["view"] },
  { path: "/contacts-list", component: ContactsList, id:"Contact", allowedPermissions: ["view"] },
  { path: "/contacts-profile", component: ContactsProfile, id:"Contact", allowedPermissions: ["view"] },
  { path: "/contacts-profile/:id", component: ContactsProfile, id:"Contact", allowedPermissions: ["view"] },

  // admin
  { path: "/team-manager", component: TeamManager, id:"Team", allowedPermissions: ["edit"] },
  { path: "/staff-manager", component: StaffManager, id:"Staff", allowedPermissions: ["edit"] },
  { path: "/new-staff", component: NewStaff, id:"Staff", allowedPermissions: ["edit"] },

  // scan device
  { path: "/scan-device", component: ScanDevice, id:"ScanDevice", allowedPermissions: ["edit"] },
  { path: "/card-id", component: SocketConfig, id:"CardId", allowedPermissions: ["edit"] },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> , id:"Dashboard", allowedPermissions:["view"]},
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
 
  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
  { path: "/permission-denied", component: PermissionDenied },

  // Authentication Inner
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-two-step-verification", component: TwostepVerification },
]

export { authProtectedRoutes, publicRoutes }
