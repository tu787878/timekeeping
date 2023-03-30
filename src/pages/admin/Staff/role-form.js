import React from "react"
import { Form, Select, Row, Col } from "antd"
import { useSelector } from "react-redux"
import { withTranslation } from "react-i18next";
const { Option } = Select

const RoleForm = (props) => {
  const { teams } = useSelector(state => ({
    teams: state.Teams.teams,
  }))

  return (
    <>
      {/* <h4>2. Role</h4> */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label={props.t("Role")} name="role">
            <Select placeholder="Select Role">
              <Option value="ADMIN">{props.t("Admin")}</Option>
              <Option value="EMPLOYEE">{props.t("Employee")}</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label={props.t("Team")} name="team">
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

export default withTranslation()(RoleForm)
