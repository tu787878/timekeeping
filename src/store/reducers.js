import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"

//chat
import chat from "./chat/reducer"

//jobs
import JobReducer from "./jobs/reducer"

//projects
import projects from "./projects/reducer"

//tasks
import tasks from "./tasks/reducer"

//contacts
import contacts from "./contacts/reducer"

//Dashboard 
import Dashboard from "./dashboard/reducer";

import Teams from "./admin/team/reducer";
import Staffs from "./admin/staff/reducer";
import Capabilities from "./admin/capability/reducer";
import ScanDevices from "./admin/scan-device/reducer";


import Notifications from "./notifications/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  chat,
  JobReducer,
  projects,
  tasks,
  contacts,
  Dashboard,
  Teams,
  Staffs,
  Capabilities,
  ScanDevices,
  Notifications
})

export default rootReducer
