import React from "react"

export const columns = () => [
  {
    title: <b>User</b>,
    dataIndex: "createdBy",
    key: "createdBy",
    align: "center",
  },
  {
    title: <b>Date</b>,
    dataIndex: "onDate",
    key: "onDate",
    align: "center",
  },
  {
    title: <b>TimeLogs</b>,
    dataIndex: "timeLogs",
    key: "timeLogs",
    align: "center",
    render: (timeLogs) => (
      <div>
        {
          timeLogs.map(time => (
            <div key={time.id}>{time.timeFrom} - {time.timeTo}</div>
          ))
        }
      </div>
    )
  },
  {
    title: <b>Created at</b>,
    dataIndex: "createdTime",
    key: "createdTime",
    align: "center",
  },
  {
    title: <b>Action</b>,
    key: "action",
    align: "center",
  },
]