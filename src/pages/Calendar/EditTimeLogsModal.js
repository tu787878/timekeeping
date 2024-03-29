import React from "react"
import { Modal, Form, Button, TimePicker, Input, Row, Col, Select } from "antd"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import moment from "moment"
import { post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"

const { RangePicker } = TimePicker
const { TextArea } = Input
const { Option } = Select

const EditTimeLogModal = ({
  openEditModal,
  setOpenEditModal,
  selectedItem,
  tr
}) => {
  const [form] = Form.useForm()
  const user = JSON.parse(localStorage.getItem("authUser"))

  const handleCloseModal = () => {
    setOpenEditModal(false)
  }
  const handleEdit = values => {
    
    const payload = { ...values }
    const date = selectedItem?.date
    payload.onDate = date
    const formatTimeLogs = payload.timeLogs.map(time => {
      return {
        type: time.type,
        timeFrom: time.date[0].format("HH:mm"),
        timeTo: time.date[1].format("HH:mm"),
      }
    })
    payload.timeLogs = formatTimeLogs

    console.log(payload);
    post(`${url.GET_STAFFS}/${user.account.id}/calendar/request`, payload).then(
      res => {
        handleCloseModal()
        form.resetFields()
      }
    )
  }

  return (
    <>
      <Modal
        title={tr("Edit time logs")}
        open={openEditModal}
        footer={null}
        onCancel={handleCloseModal}
        destroyOnClose
        width={600}
      >
        <Form
          form={form}
          initialValues={{ timeLogs: [] }}
          onFinish={handleEdit}
          style={{ marginTop: 20 }}
        >
          <Form.List name="timeLogs">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Row key={key} gutter={12}>
                      <Col span={10}>
                        <Form.Item
                          {...restField}
                          name={[name, "date"]}
                          rules={[
                            {
                              required: true,
                              message: "This field is required",
                            },
                          ]}
                        >
                          <RangePicker format="HH:mm" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          {...restField}
                          name={[name, "type"]}
                          rules={[
                            {
                              required: true,
                              message: "This field is required",
                            },
                          ]}
                        >
                          <Select placeholder="Select">
                            <Option key="WORK" value="WORK">
                            {tr("WORK")}
                            </Option>
                            <Option key="VACATION" value="VACATION">
                            {tr("VACATION")}
                            </Option>
                            {/* <Option key="OTHERS" value="OTHERS">
                              OTHERS
                            </Option> */}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Col>
                    </Row>
                  </>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                  {tr("Add time")}
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item name="note" label= {tr("Note")}>
            <TextArea />
          </Form.Item>

          <Form.Item noStyle>
            <div
              style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}
            >
              <Button danger onClick={handleCloseModal}>
              {tr("Cancel")}
              </Button>
              <Button htmlType="submit" type="primary">
              {tr("Save")}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EditTimeLogModal
