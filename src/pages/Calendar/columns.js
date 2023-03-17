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

export const tableColumns = (handleOpenEditModal, id) => [
  {
    title: "DW",
    key: "dayOfWeek",
    dataIndex: "dayOfWeek",
    align: "center",
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
    align: "center",
  },
  {
    title: "Time logs",
    key: "timeLogs",
    dataIndex: "timeLogs",
    align: "center",
    render: (timeLogs, record) => {
      return record.dateType !== "HOLIDAY" ? (  
      <> 
          {timeLogs.map(time => (
            <div style={{color: time.status === "VALID" ? "black" : "red"}} key={time.id}>
             {time.type !== "WORK" ? (time.type + ":") : ""} {(time.info === "CUSTOM" || time.info === null)  ? (time.timeFrom + "-" + time.timeTo) : time.info} 
            </div>
          ))}

      </>
    ) : (<div>Holiday</div>)},
  },
  {
    title: "Total time",
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
    title: "Regular time",
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
    title: "Overtime",
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
    title: "Action",
    key: "Action",
    align: "center",
    render: item => (
      !id ? <Button color="warning" outline onClick={() => handleOpenEditModal(item)}>
        Edit
      </Button> : null
    ),
  },
]
