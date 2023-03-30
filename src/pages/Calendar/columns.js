import React from "react"
import { Button } from "reactstrap"
import {
  CarTwoTone
} from "@ant-design/icons"
const toTime = (minutes) => {
  let negative = false;
  if (minutes < 0) negative = true;

  minutes = Math.abs(minutes);
  var m = minutes % 60;
  var h = (minutes - m) / 60;
  return (negative ? "-" : "") + h + ":" + ((m < 10) ? "0" : "") + m;
}

export const tableColumns = (handleOpenEditModal, id, tr) => [
  {
    title: tr("Day"),
    key: "dayOfWeek",
    dataIndex: "dayOfWeek",
    align: "center",
  },
  {
    title: tr("Date"),
    key: "date",
    dataIndex: "date",
    align: "center",
  },
  {
    title: tr("Time logs"),
    key: "timeLogs",
    dataIndex: "timeLogs",
    align: "center",
    render: (timeLogs, record) => {
      return record.dateType !== "HOLIDAY" ? (  
      <> 
          {timeLogs.map(time => (
            <div style={{color: time.status === "VALID" ? "black" : "red"}} key={time.id}>
             {time.type !== "WORK" ? (tr(time.type) + ":") : ""} {(time.info === "CUSTOM" || time.info === null || time.info === "")  ? (time.timeFrom + "-" + time.timeTo) : tr(time.info)} 
            </div>
          ))}

      </>
    ) : (<div>{tr("Holiday")}</div>)},
  },
  {
    title: tr("Total time"),
    key: "total",
    dataIndex: "total",
    align: "center",
    render: total => (
      <>
        {toTime(total)}
      </>
    ),
  },
  {
    title: tr("Regular time"),
    key: "regularTime",
    dataIndex: "regularTime",
    align: "center",
    render: regularTime => (
      <>
        {toTime(regularTime)}
      </>
    ),
  },
  {
    title:  tr("Overtime"),
    key: "balance",
    dataIndex: "balance",
    align: "center",
    render: balance => (
      <>
        <div style={{ color: balance < 0 ? "red" : "green" }}>{toTime(balance)}</div>
      </>
    ),
  },
  {
    title: tr("Action"),
    key: "Action",
    align: "center",
    render: item => (
      !id ? <Button color="warning" outline onClick={() => handleOpenEditModal(item)}>
        {tr("Edit")}
      </Button> : null
    ),
  },
]
