import React from "react"
import {
  CarTwoTone,
  CloseSquareTwoTone
} from "@ant-design/icons"
import { Button, Table, Space, Modal, Form, Input, Select, } from "antd"
import Moment from 'react-moment';
export const columns = (doCancel, tr) => [
  {
    title: <b>{tr("User")}</b>,
    dataIndex: "createdBy",
    key: "createdBy",
    align: "center",
  },
  {
    title: <b>{tr("Date")}</b>,
    dataIndex: "onDate",
    key: "onDate",
    align: "center",
    render: (_, record) => (
      <div>
        {record.onDate}{record.toDate !== null ? (" - " + record.toDate) : ""}
      </div>
    ),
  },
  {
    title: <b>{tr("Timelogs")}</b>,
    dataIndex: "timeLogs",
    key: "timeLogs",
    align: "center",
    render: (timeLogs) => (
      <div>
        {
          timeLogs.map(time => (
            <div key={time.id}>{time.type !== "WORK" ? (tr(time.type) + ":") : ""} {(time.info === "CUSTOM" || time.info === null)  ? (time.timeFrom + "-" + time.timeTo) : tr(time.info)} </div>
          ))
        }
      </div>
    )
  },
  {
    title: <b>{tr("Created at")}</b>,
    dataIndex: "createdTime",
    key: "createdTime",
    align: "center",
    render: (_,record) => (
      <Moment format="MM/DD/YYYY hh:mm">{record.createdTime}</Moment>
    ),
  },
  {
    title: <b>{tr("Note")}</b>,
    dataIndex: "note",
    key: "note",
    align: "center",
  },
  {
    title: <b>{tr("Action")}</b>,
    key: "action",
    align: "center",
    render: (_, record) => {
      return record.status ? (record.accept ? "accepted" : "denied") : <Space size="middle">
        <a
          onClick={() => {
            doCancel(record.id)
          }}
        >
          <CloseSquareTwoTone twoToneColor="red" />
        </a>
      </Space>;
    },
  },
]