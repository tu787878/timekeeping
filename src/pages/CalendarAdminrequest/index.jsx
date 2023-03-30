import React from "react"
import AdminRequestTable from "./AdminRequestTable/UserRequestTable"
import { withTranslation } from "react-i18next";
const CalendarAdminRequest = (props) => {
  return (
    <div className="page-content">
      <h1>{props.t("Admin Requests")}</h1>
      <AdminRequestTable />
    </div>
  )
}

export default withTranslation()(CalendarAdminRequest)
