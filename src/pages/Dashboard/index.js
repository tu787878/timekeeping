import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Dashboard = props => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ]

  //meta title
  document.title = "Saas Dashboard | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      dashboard
    </React.Fragment>
  )
}

export default Dashboard
