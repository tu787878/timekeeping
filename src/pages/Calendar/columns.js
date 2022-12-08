import React from "react"
import { Button } from "reactstrap"

export const tableColumns = handleOpenEditModal => [
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
    render: timeLogs => (
      <>
        {timeLogs.map(time => (
          <div key={time.id}>
            {time.timeFrom} - {time.timeTo}
          </div>
        ))}
      </>
    ),
  },
  {
    title: "Total time",
    key: "total",
    dataIndex: "total",
    align: "center",
  },
  {
    title: "Regular time",
    key: "regularTime",
    dataIndex: "regularTime",
    align: "center",
  },
  {
    title: "Overtime",
    key: "balance",
    dataIndex: "balance",
    align: "center",
  },
  {
    title: "Action",
    key: "Action",
    align: "center",
    render: item => (
      <Button color="warning" outline onClick={() => handleOpenEditModal(item)}>
        Edit
      </Button>
    ),
  },
]
