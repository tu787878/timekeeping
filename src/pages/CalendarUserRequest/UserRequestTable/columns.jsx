import React from "react"
import {
  CarTwoTone,
  CloseSquareTwoTone
} from "@ant-design/icons"
import { Button, Table, Space, Modal, Form, Input, Select, } from "antd"
import Moment from 'react-moment';
export const columns = (doCancel) => [
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
            <div key={time.id}>{time.timeFrom} - {time.timeTo} {time.type !== "WORK" ? <CarTwoTone /> : ""}</div>
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
    render: (_,record) => (
      <Moment toNow>{record.createdTime}</Moment>
    ),
  },
  {
    title: <b>Action</b>,
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