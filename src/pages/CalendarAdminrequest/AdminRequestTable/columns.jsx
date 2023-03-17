import React from "react"
import {
  CheckSquareTwoTone,
  CarTwoTone,
  CloseSquareTwoTone,
} from "@ant-design/icons"
import { Button, Table, Space, Modal, Form, Input, Select } from "antd"
import Moment from "react-moment"
import _ from "lodash"
export const columns = (doAccept, doDenied) => [
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
    render: (_, record) => (
      <div>
        {record.onDate}{record.toDate !== null ? (" - " + record.toDate) : ""}
      </div>
    ),
  },
  {
    title: <b>TimeLogs</b>,
    dataIndex: "timeLogs",
    key: "timeLogs",
    align: "center",
    render: timeLogs => (
      <div>
        {timeLogs.map(time => (
          <div key={time.id}>
            {time.type !== "WORK" ? (time.type + ":") : ""} {(time.info === "CUSTOM" || time.info === null)  ? (time.timeFrom + "-" + time.timeTo) : time.info} 
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <b>Created at</b>,
    dataIndex: "createdTime",
    key: "createdTime",
    align: "center",
    render: (_, record) => <Moment fromNow>{record.createdTime}</Moment>,
  },
  {
    title: <b>Note</b>,
    dataIndex: "note",
    key: "note",
    align: "center",
  },
  {
    title: <b>Action</b>,
    key: "action",
    align: "center",
    render: (_, record) => {
      return record.status ? (
        record.accept ? (
          "accepted"
        ) : (
          "denied"
        )
      ) : (
        <Space size="middle">
          <a
            onClick={() => {
              doAccept(record.id)
            }}
          >
            <CheckSquareTwoTone twoToneColor="blue" />
          </a>
          <a
            onClick={() => {
              doDenied(record.id)
            }}
          >
            <CloseSquareTwoTone twoToneColor="red" />
          </a>
        </Space>
      )
    },
  },
]
