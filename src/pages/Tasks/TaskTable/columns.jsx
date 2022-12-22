import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import { Tag, Avatar, Tooltip } from "antd"

import avatar4 from "../../../assets/images/users/avatar-4.jpg"

export const columns = () => [
  {
    title: <b>Name</b>,
    key: "name",
    dataIndex: "name",
    align: "center",
  },
  {
    title: <b>Project</b>,
    key: "project",
    dataIndex: "project",
    align: "center",
    render: project => project?.name,
  },
  {
    title: <b>User</b>,
    key: "accounts",
    dataIndex: "accounts",
    align: "center",
    render: accounts => (
      <>
        <Avatar.Group
          // maxCount={2}
          size="small"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
            marginLeft: '10px'
          }}
        >
          {accounts.map(account => {
            return (
              <Tooltip key={account.id} title={`${account.userDetail.firstName} ${account.userDetail.lastName}`} placement="top">
                {(account.userDetail.avatar !== "") ? <Avatar src={account.userDetail.avatar} /> : <Avatar
                  style={{
                    backgroundColor: '#386087',
                  }}
                >
                  {account.userDetail.lastName.charAt(0)}
                </Avatar>}
              </Tooltip>
            )
          })}
        </Avatar.Group>

      </>
    )
  },
  {
    title: <b>Status</b>,
    key: "status",
    dataIndex: "status",
    align: "center",
    render: status => (status === "TODO" ? <Tag color="purple">TODO</Tag> : (status === "DONE" ? <Tag color="cyan">DONE</Tag> : <Tag color="red">PROCESSING</Tag>))
  },
  {
    title: <b>Type</b>,
    key: "type",
    dataIndex: "type",
    align: "center",
    render: type => (<Tag color="geekblue">{type}</Tag>)
  },
  {
    title: <b>Severity</b>,
    key: "severity",
    dataIndex: "severity",
    align: "center",
    render: severity => (<Tag color="orange">{severity}</Tag>),
  },
  {
    title: <b>Created Date</b>,
    key: "createdTime",
    dataIndex: "createdTime",
    align: "center",
    render: time => moment(time).format("HH:mm:ss DD/MM/YYYY"),
  },
]
