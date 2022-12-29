import React, { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { Table, Avatar, Tooltip, Tag, Checkbox } from "antd"
//Import Component
import Breadcrumbs from "components/Common/Breadcrumb"
import { GET_PROJECTS } from "../../helpers/url_helper"
import { get } from "../../helpers/api_helper"
import Moment from "react-moment"
import { filter } from "lodash"
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name, record) => {
      return <a href={`/projects-overview/${record.id}`}>{name}</a>
    },
    width: "20%",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Status",
    dataIndex: "status",
    render: status => (
      <>
        {status === "TODO" ? (
          <Tag color="purple">TODO</Tag>
        ) : status === "DONE" ? (
          <Tag color="cyan">DONE</Tag>
        ) : (
          <Tag color="red">PROCESSING</Tag>
        )}
      </>
    ),
    filters: [
      {
        text: "TODO",
        value: "TODO",
      },
      {
        text: "PROCESSING",
        value: "PROCESSING",
      },
      {
        text: "DONE",
        value: "DONE",
      },
    ],
  },
  {
    title: "Users",
    dataIndex: "accounts",
    render: accounts => (
      <>
        <Avatar.Group
          // maxCount={2}
          size="small"
          maxStyle={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            marginLeft: "10px",
          }}
        >
          {accounts.map(account => {
            return (
              <Tooltip
                key={account.id}
                title={`${account.userDetail.firstName} ${account.userDetail.lastName}`}
                placement="top"
              >
                {account.userDetail.avatar !== "" ? (
                  <Avatar src={account.userDetail.avatar} />
                ) : (
                  <Avatar
                    style={{
                      backgroundColor: "#386087",
                    }}
                  >
                    {account.userDetail.lastName.charAt(0)}
                  </Avatar>
                )}
              </Tooltip>
            )
          })}
        </Avatar.Group>
      </>
    ),
  },
  {
    title: "Team",
    dataIndex: "team",
    render: team => (
      <>
        {team ? (
          <Tooltip title={`${team.name}`} placement="top">
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
            >
              {team?.name.charAt(0)}
            </Avatar>
          </Tooltip>
        ) : null}
      </>
    ),
  },
  {
    title: "Created Date",
    dataIndex: "createdTime",
    render: time => <Moment format="HH:mm DD/MM/YYYY">{time}</Moment>,
    width: "20%",
  },
]
const getRandomuserParams = params => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
})

const ProjectsList = () => {
  //meta title
  document.title = "Project List | TCG - Web & Marketing"

  const [projects, setProjects] = useState([])
  const [myProject, setMyProject] = useState(true)

  const obj = JSON.parse(localStorage.getItem("authUser"))
  const accountId = obj.account.id

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const myProjectChange = value => {
    console.log(value.target.checked)
    setMyProject(value.target.checked)
  }

  const fetchData = () => {
    setLoading(true)
    let url =
      GET_PROJECTS +
      "?page=" +
      (tableParams.pagination.current - 1) +
      "&size=" +
      tableParams.pagination.pageSize +
      ((tableParams.filters && tableParams.filters.status
        ? "&status=" + tableParams.filters.status
        : "") +
        (myProject ? "&accountId=" + accountId : ""))
    get(url)
      .then(results => {
        console.log(results)
        setData(results.data.data)
        setLoading(false)
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: results.data.total,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        })
      })
      .catch(err => {
        setData([])
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(tableParams), myProject])

  const handleTableChange = (pagination, filters) => {
    setTableParams({
      pagination,
      filters,
    })

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([])
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid style={{ overflowX: "scroll" }}>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Projects List" />
          <Row>
            <Checkbox checked={myProject} onChange={myProjectChange}>
              My Projects
            </Checkbox>
          </Row>
          <Row>
            <Table
              columns={columns}
              scroll={{ y: 500 }}
              rowKey={record => record.login?.uuid}
              dataSource={data}
              pagination={tableParams.pagination}
              loading={loading}
              onChange={handleTableChange}
            />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ProjectsList)
