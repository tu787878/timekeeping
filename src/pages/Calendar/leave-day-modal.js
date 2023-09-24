import React, { useState } from "react"
import { Modal, Button, Form, DatePicker, Radio, Input, Select, InputNumber } from "antd"
import moment from "moment"
import { withTranslation } from "react-i18next";
import { get, post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"

const { Option } = Select

const { RangePicker } = DatePicker
const { TextArea } = Input
const LeaveDayModal = (props) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(1);
  const [form] = Form.useForm()

  const user = JSON.parse(localStorage.getItem("authUser"))

  const handleFinish = values => {
    const data = { ...values }
    data.onDate = values.date[0].format("DD/MM/YYYY")
    if (values.date[0].format("DD/MM/YYYY") !== values.date[1].format("DD/MM/YYYY"))
      data.toDate = values.date[1].format("DD/MM/YYYY")
    delete data.date
    // call api...
    if (values.type == undefined) data.type = 8

    data.timeLogs = []
    data.note = values.note

    console.log(data);
    setOpen(false)

    post(`${url.GET_STAFFS}/${user.account.id}/calendar/request`, data).then(
      res => {
        form.resetFields()
      }
    )
  }


  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}> {props.t("Request off day")}</Button>
      <Modal
        title={props.t("Request off day")}
        open={open}
        onOk={(datas) => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form
          name="create-leave-day-form"
          onFinish={handleFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          form={form}
        >
          <Form.Item
            name="date"
            label={props.t("Date")}
            style={{ margin: "20px 0 10px 0" }}
            rules={[{ required: true, message: props.t("Please input the date!") }]}
          >
            <RangePicker format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item name="timeLogType" label={props.t("Type")} rules={[{ required: true, message: props.t("Please select a type!") }]}>
            <Select placeholder="Select">
              
              <Option key="VACATION" value="VACATION">
                {props.t("VACATION")}
              </Option>
              <Option key="ILL" value="ILL">
                {props.t("ILL")}
              </Option>
              {/* <Option key="OTHERS" value="OTHERS">
                              OTHERS
                            </Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="type" label={props.t("Hours")}>
            <InputNumber min={1} defaultValue={8}/>
          </Form.Item>
          <Form.Item name="note" label={props.t("Note")}>
            <TextArea />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 10 }}>
              <Button type="primary" htmlType="submit">
                {props.t("Create")}
              </Button>
              <Button onClick={() => setOpen(false)}>{props.t("Cancel")}</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default withTranslation()(LeaveDayModal)
