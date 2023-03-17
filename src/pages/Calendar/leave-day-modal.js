import React, { useState } from "react"
import { Modal, Button, Form, DatePicker, Radio, Input } from "antd"
import moment from "moment"
import { get, post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
const { RangePicker } = DatePicker
const { TextArea } = Input
const LeaveDayModal = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(1);
  const [form] = Form.useForm()

  const user = JSON.parse(localStorage.getItem("authUser"))

  const handleFinish = values => {
    const data = { ...values }
    data.onDate = values.date[0].format("DD/MM/YYYY")
    if(values.date[0].format("DD/MM/YYYY") !== values.date[1].format("DD/MM/YYYY"))
      data.toDate = values.date[1].format("DD/MM/YYYY")
    delete data.date
    // call api...
    if(values.type== undefined) data.type=1

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
      <Button type="primary" onClick={() => setOpen(true)}>Request off day</Button>
      <Modal
        title="Request off day"
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
            label="Date"
            style={{ margin: "20px 0 10px 0" }}
            rules={[{ required: true, message: 'Please input the date!' }]}
          >
            <RangePicker format={"DD/MM/YYYY"} />
          </Form.Item>

          <Form.Item name="type" label="Type">
            <Radio.Group defaultValue={1}>
              <Radio value={2}>Half day</Radio>
              <Radio defaultChecked={true} value={1}>Full day</Radio>
              <Radio value={0} disabled={true}>Custom</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="note" label="Note">
            <TextArea />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 10 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default LeaveDayModal
