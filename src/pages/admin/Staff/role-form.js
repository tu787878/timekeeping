import React from "react"
import { Form, Select, Row, Col } from "antd"
import { useSelector } from "react-redux"

const { Option } = Select

const RoleForm = () => {
  const { teams } = useSelector(state => ({
    teams: state.Teams.teams,
  }))

  return (
    <>
      {/* <h4>2. Role</h4> */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Role" name="role">
            <Select placeholder="Select Role">
              <Option value="ADMIN">Admin</Option>
              <Option value="EMPLOYEE">Employee</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Team" name="team">
            <Select>
              {teams &&
                teams.length !== 0 &&
                teams.map(team => (
                  <Option key={team.id} value={team.id}>
                    {team.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default RoleForm
