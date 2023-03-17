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

const { Option } = Select

const JobForm = () => {
  return (
    <>
      {/* <h4>3. Job</h4> */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Job name" name="jobName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Working Type" name="workingType">
            <Select placeholder="Select Type">
              <Option value="FULLTIME">Fulltime</Option>
              <Option value="PARTTIME">Parttime</Option>
              <Option value="MINIJOB">Minijob</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Vacation in year (days)" name="maxHours">
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
                      <Typography.Text>Day Of Week</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>From</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>To</Typography.Text>
                    </Col>
                    <Col span={5} style={{ textAlign: "center" }}>
                      <Typography.Text>Breaktime (mins)</Typography.Text>
                    </Col>
                  </Row>
                )}
                {fields.map(({ key, name, ...field }) => (
                  <Row key={key} gutter={24}>
                    <Col span={6}>
                      <Form.Item {...field} name={[name, "dayOfWeek"]}>
                        <Select placeholder="Select" style={{ width: "100%" }}>
                          <Option value={1}>Monday</Option>
                          <Option value={2}>Tuesday</Option>
                          <Option value={3}>Wednesday</Option>
                          <Option value={4}>Thursday</Option>
                          <Option value={5}>Friday</Option>
                          <Option value={6}>Saturday</Option>
                          <Option value={7}>Sunday</Option>
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
                    Add Workingtime
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

export default JobForm
