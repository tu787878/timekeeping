import React, { useState, useEffect } from "react"
import { Form, Select, Row, Col, Checkbox, Button } from "antd"
import { get } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const { Option } = Select

const TaskFilter = ({ setFilter, t }) => {
  const [projects, setProjects] = useState([])

  const user = JSON.parse(localStorage.getItem("authUser"))
  console.log(user.account.id)

  useEffect(() => {
    get(`${url.GET_ALL_PROJECTS}`).then(res => {
      setProjects(res.data)
    })
  }, [])

  const handleFilter = (value, values) => {
    const params = { ...values }
    console.log(values)
    if (params.accountId) {
      params.accountId = user.account.id
    } else {
      delete params.accountId
    }

    setFilter(params)
  }

  return (
    <Form
      name="task-filter"
      // onFinish={handleFilter}
      labelCol={{ span: 7 }}
      labelAlign="left"
      onValuesChange={handleFilter}
    >
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item name="accountId" valuePropName="checked">
            <Checkbox style={{ lineHeight: "32px" }} >My tasks</Checkbox>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="projectId" label="Project">
            <Select allowClear>
              {projects?.length &&
                projects.map(project => (
                  <Option key={project.id} value={project.id}>
                    {project.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="status" label="Status">
            <Select allowClear>
              <Option value="TODO">To do</Option>
              <Option value="PROCESSING">In Progess</Option>
              <Option value="DONE">Done</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="type" label="Type">
            <Select allowClear>
              <Option key="BUGS">Bugs</Option>
              <Option key="FEATURES">Features</Option>
              <Option key="TODO">Todo</Option>
              <Option key="OTHERS">Others</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="severity" label="Severity">
            <Select allowClear>
              <Option key="LOW">Low</Option>
              <Option key="MEDIUM">Medium</Option>
              <Option key="HIGH">High</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default TaskFilter
