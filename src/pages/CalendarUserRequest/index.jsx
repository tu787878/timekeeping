import React from "react"
import UserRequestTable from "./UserRequestTable/UserRequestTable"
import { withTranslation } from "react-i18next";
const UserCalendarRequest = (props) => {

  return (
    <div className="page-content">
      <h1>{props.t("User Requests")}</h1>
      <UserRequestTable />
    </div>
  )
}

export default withTranslation()(UserCalendarRequest)