import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Pages Calendar
import Calendar from "../pages/Calendar/index"
import CalendarUserRequest from "../pages/CalendarUserRequest"
import CalendarAdminRequest from "../pages/CalendarAdminrequest"

// //Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksCreate from "../pages/Tasks/tasks-create"
import TasksOverview from "../pages/Tasks/tasks-overview"

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Authentication from "../pages/Authentication/Authentication"
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
import EditProfile from "../pages/Contacts/ContactsProfile/edit-profile"

// admin
import TeamManager from "../pages/admin/team"
import LocationManager from "../pages/admin/location"
import StaffManager from "../pages/admin/Staff"
import NewStaff from "../pages/admin/Staff/new-staff"
import ScanDevice from "../pages/admin/scan-device/index"
import EditHoliday from "../pages/admin/settings/holiday"
import IPList from "../pages/admin/settings/iplist"
import EmailSetting from "../pages/admin/settings/email-setting"
import EditGeneral from "../pages/admin/settings/general"
import SocketConfig from "../components/socket/socket"

// notification
import Notifications from "pages/Notifications"
import ResetPassword from "pages/Authentication/ResetPassword"

const authProtectedRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    id: "Dashboard",
    allowedPermissions: [],
    className: "",
    contextId: "Dashboard",
  },

  //chat
  {
    path: "/chat",
    component: Chat,
    id: "Chat",
    allowedPermissions: [],
    className: "bx-chat",
    contextId: "Chat",
  },

  // //calendar
  {
    path: "/calendar",
    component: Calendar,
    id: "Calendar",
    allowedPermissions: [],
    className: "bx-calendar",
    contextId: "Calendar",
  },
  {
    path: "/calendar/:id",
    component: Calendar,
    id: "Calendar",
    allowedPermissions: ["admin"],
    className: "bx-calendar",
    contextId: "Calendar",
  },
  {
    path: "/calendar-admin-request",
    component: CalendarAdminRequest,
    id: "CalendarAdminRequest",
    allowedPermissions: ["admin"],
    className: "bx-calendar",
    contextId: "CalendarAdminRequest",
  },
  {
    path: "/calendar-user-request",
    component: CalendarUserRequest,
    id: "CalendarUserRequest",
    allowedPermissions: [],
    className: "bx-calendar",
    contextId: "CalendarUserRequest",
  },

  // //profile
  {
    path: "/profile",
    component: UserProfile,
    id: "Profile",
    allowedPermissions: [],
  },
    // //profile
    {
      path: "/edit-profile",
      component: EditProfile,
      id: "EditProfile",
      allowedPermissions: [],
    },

  // Tasks
  {
    path: "/tasks-list",
    component: TasksList,
    id: "Task",
    allowedPermissions: [],
  },
  {
    path: "/tasks-create",
    component: TasksCreate,
    id: "Task",
    allowedPermissions: [],
  },

  //Projects
  {
    path: "/projects-grid",
    component: ProjectsGrid,
    id: "Project",
    allowedPermissions: [],
  },
  {
    path: "/projects-list",
    component: ProjectsList,
    id: "Project",
    allowedPermissions: [],
  },
  {
    path: "/projects-overview/:id",
    component: ProjectsOverview,
    id: "Project",
    allowedPermissions: [],
  },
  {
    path: "/tasks-overview/:id",
    component: TasksOverview,
    id: "Task",
    allowedPermissions: [],
  },
  {
    path: "/projects-create",
    component: ProjectsCreate,
    id: "Project",
    allowedPermissions: [],
  },

  //Blog
  {
    path: "/blog-list",
    component: BlogList,
    id: "Blog",
    allowedPermissions: [],
  },
  {
    path: "/blog-grid",
    component: BlogGrid,
    id: "Blog",
    allowedPermissions: [],
  },
  {
    path: "/blog-details",
    component: BlogDetails,
    id: "Blog",
    allowedPermissions: [],
  },

  // Contacts
  {
    path: "/contacts-grid",
    component: ContactsGrid,
    id: "Contact",
    allowedPermissions: [],
  },
  {
    path: "/contacts-list",
    component: ContactsList,
    id: "Contact",
    allowedPermissions: [],
  },
  {
    path: "/contacts-profile",
    component: ContactsProfile,
    id: "Contact",
    allowedPermissions: [],
  },
  {
    path: "/contacts-profile/:id",
    component: ContactsProfile,
    id: "Contact",
    allowedPermissions: [],
  },

  // admin
  {
    path: "/location-manager",
    component: LocationManager,
    id: "Location",
    allowedPermissions: ["admin"],
  },
  {
    path: "/team-manager",
    component: TeamManager,
    id: "Team",
    allowedPermissions: ["admin"],
  },
  {
    path: "/staff-manager",
    component: StaffManager,
    id: "Staff",
    allowedPermissions: ["admin"],
  },
  {
    path: "/new-staff",
    component: NewStaff,
    id: "Staff",
    allowedPermissions: ["admin"],
  },

  // scan device
  {
    path: "/scan-device",
    component: ScanDevice,
    id: "ScanDevice",
    allowedPermissions: ["admin"],
  },
  {
    path: "/edit-general",
    component: EditGeneral,
    id: "EditGeneral",
    allowedPermissions: ["admin"],
  },
  {
    path: "/edit-holiday",
    component: EditHoliday,
    id: "EditHoliday",
    allowedPermissions: ["admin"],
  },
  {
    path: "/IPlist",
    component: IPList,
    id: "IPList",
    allowedPermissions: ["admin"],
  },
  {
    path: "/email-setting",
    component: EmailSetting,
    id: "EmailSetting",
    allowedPermissions: ["admin"],
  },
  {
    path: "/card-id",
    component: SocketConfig,
    id: "CardId",
    allowedPermissions: ["admin"],
  },

  // notifications
  {
    path: "/notifications",
    component: Notifications,
    id: "Notiification",
    allowedPermissions: [],
  },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    id: "Dashboard",
    allowedPermissions: ["view"],
  },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/authentication", component: Authentication },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/reset-password", component: ResetPassword },
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
