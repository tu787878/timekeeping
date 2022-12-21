import React from "react"
import { Form, Select, Row, Col } from "antd"

const { Option } = Select

const TaskFilter = () => {
  const handleFilter = () => {
    console.log("filter")
  }

  return (
    <Form
      name="task-filter"
      onFinish={handleFilter}
      labelCol={{ span: 8 }}
      labelAlign="left"
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="project" label="Project">
            <Select></Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="accountId" label="Member">
            <Select></Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="status" label="Status">
            <Select></Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default TaskFilter
