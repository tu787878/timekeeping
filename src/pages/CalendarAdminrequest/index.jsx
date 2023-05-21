import React from "react"
import AdminRequestTable from "./AdminRequestTable/UserRequestTable"
import { withTranslation } from "react-i18next";
import { Button } from "antd"

function doDeleteAdminRequest(){
  console.log("hihihi");
}

const CalendarAdminRequest = (props) => {
  return (
    <div className="page-content">
      <h1>{props.t("Admin Requests")}</h1>
          
      <AdminRequestTable />
      <Button htmlType="submit" danger onClick={doDeleteAdminRequest}>
            {props.t("Delete all")}
      </Button>
    </div>
  )
}

export default withTranslation()(CalendarAdminRequest)
