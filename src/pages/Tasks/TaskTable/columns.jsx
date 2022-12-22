import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import { Tag } from "antd"

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
    render: project => project.name,
  },
  {
    title: <b>Members</b>,
    key: "members",
    dataIndex: "members",
    align: "center",
    render: members => (
      <div className="avatar-group">
        {members?.length &&
          members.map(member => (
            <div key={member.id} className="avatar-group-item">
              <Link to="#" className="d-inline-block">
                <img
                  src={avatar4}
                  alt=""
                  className="rounded-circle avatar-xs"
                />
              </Link>
            </div>
          ))}
      </div>
    ),
  },
  {
    title: <b>Status</b>,
    key: "status",
    dataIndex: "status",
    align: "center",
    render: status => <Tag>status</Tag>,
  },
  {
    title: <b>Type</b>,
    key: "type",
    dataIndex: "type",
    align: "center",
  },
  {
    title: <b>Severity</b>,
    key: "severity",
    dataIndex: "severity",
    align: "center",
    render: severity => <Tag>severity</Tag>,
  },
  {
    title: <b>Created Date</b>,
    key: "createdTime",
    dataIndex: "createdTime",
    align: "center",
    render: time => moment(time).format("HH:mm:ss DD/MM/YYYY"),
  },
]
