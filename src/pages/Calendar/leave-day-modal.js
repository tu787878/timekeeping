import React, { useState } from "react"
import { Modal, Button, Form, DatePicker, Checkbox } from "antd"
import moment from "moment"

const { RangePicker } = DatePicker

const LeaveDayModal = () => {
  const [open, setOpen] = useState(false)

  const handleFinish = values => {
    const data = { ...values }
    data.fromDate = values.date[0]
    data.toDate = values.date[1]
    delete data.date
    // call api...
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Create leave day</Button>
      <Modal
        title="Create leave day"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form
          name="create-leave-day-form"
          onFinish={handleFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
        >
          <Form.Item
            name="date"
            label="Date"
            style={{ margin: "20px 0 10px 0" }}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item name="isFullDay" label="Full Day">
            <Checkbox />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", gap: 10 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
              <Button>Cancel</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default LeaveDayModal
