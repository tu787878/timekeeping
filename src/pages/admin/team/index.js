import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Table, Tag, Space, Modal, Form, Input } from "antd"
import type { ColumnsType, TableProps } from "antd/es/table"
import { Container } from "reactstrap"
import { getTeams, updateTeams } from "store/actions"

const TeamManager = props => {
  const { teams, onGetTeams } = props

  useEffect(() => {
    onGetTeams()
  }, [onGetTeams])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editTeam, setEditTeam] = useState(null)
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  interface DataType {
    key: React.Key;
    parent: any;
    team_name: string;
    team_manager: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Parent Team",
      dataIndex: "parent.name",
      key: "parent",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Team",
      dataIndex: "name",
      key: "team_name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Team Manager",
      dataIndex: "team_manager",
      key: "team_manager",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = "blue"

            return (
              <Tag color={color} key={tag}>
                {tag.toLowerCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setEditTeam(record)
              showModal()
            }}
          >
            Edit{" "}
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  //meta title
  document.title = "Team Manager | TCG - Admin & Dashboard"
  return (
    <>
      <Modal
        title="Edit Team"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={editTeam}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item label="Name">
            <Input name="name" />
          </Form.Item>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Staff Manager" breadcrumbItem="Team" />
          <Table columns={columns} dataSource={teams} />
        </Container>
      </div>
    </>
  )
}

TeamManager.propTypes = { devices: PropTypes.any }

const mapStateToProps = ({ Teams }) => ({
  teams: Teams.teams,
})

const mapDispatchToProps = dispatch => ({
  onGetTeams: () => dispatch(getTeams()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TeamManager))
