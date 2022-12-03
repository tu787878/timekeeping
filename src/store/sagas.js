import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import calendarSaga from "./calendar/saga"
import chatSaga from "./chat/saga"
import jobsSaga from "./jobs/saga"
import projectsSaga from "./projects/saga"
import tasksSaga from "./tasks/saga"
import contactsSaga from "./contacts/saga";
import dashboardSaga from "./dashboard/saga";
import teamsSaga from "./admin/team/saga";
import staffsSaga from "./admin/staff/saga";
import capabilitiesSaga from "./admin/capability/saga";
import scanDevicesSaga from "./admin/scan-device/saga";


export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(jobsSaga),
    fork(projectsSaga),
    fork(tasksSaga),
    fork(contactsSaga),
    fork(dashboardSaga),
    fork(teamsSaga),
    fork(staffsSaga),
    fork(capabilitiesSaga),
    fork(scanDevicesSaga)
  ])
}
