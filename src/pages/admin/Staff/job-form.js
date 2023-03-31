import React from "react"
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Typography,
  TimePicker,
  InputNumber,
  Button,
} from "antd"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { withTranslation } from "react-i18next";
const { Option } = Select

const JobForm = (props) => {
  return (
    <>
      {/* <h4>3. Job</h4> */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label={props.t("Job name")} name="jobName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Working Type" name="workingType">
            <Select placeholder="Select Type">
              <Option value="FULLTIME">{props.t("Fulltime")}</Option>
              <Option value="PARTTIME">{props.t("Parttime")}</Option>
              <Option value="MINIJOB">{props.t("Minijob")}</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label={props.t("Vacation days (in year)")} name="maxHours">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label={props.t("Min Overtime (in minutes)")} name="minOvertime">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.List name={["workingTimes"]}>
            {(fields, { add, remove }) => (
              <>
                {!!fields.length && (
                  <Row align="middle">
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("Day Of Week")}</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("From")}</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("To")}</Typography.Text>
                    </Col>
                    <Col span={5} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("Breaktime")} ({props.t("mins")})</Typography.Text>
                    </Col>
                  </Row>
                )}
                {fields.map(({ key, name, ...field }) => (
                  <Row key={key} gutter={24}>
                    <Col span={6}>
                      <Form.Item {...field} name={[name, "dayOfWeek"]}>
                        <Select placeholder="Select" style={{ width: "100%" }}>
                          <Option value={1}>{props.t("Monday")}</Option>
                          <Option value={2}>{props.t("Tuesday")}</Option>
                          <Option value={3}>{props.t("Wednesday")}</Option>
                          <Option value={4}>{props.t("Thursday")}</Option>
                          <Option value={5}>{props.t("Friday")}</Option>
                          <Option value={6}>{props.t("Saturday")}</Option>
                          <Option value={7}>{props.t("Sunday")}</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item {...field} name={[name, "timeFrom"]}>
                        <TimePicker format="HH:mm" style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item {...field} name={[name, "timeTo"]}>
                        <TimePicker format="HH:mm" style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col span={5}>
                      <Form.Item {...field} name={[name, "breakTime"]}>
                        <InputNumber min={0} style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col span={1}>
                      <Form.Item {...field}>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
                <Form.Item wrapperCol={24}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    {props.t("Add Workingtime")}
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
    </>
  )
}

export default withTranslation()(JobForm)
