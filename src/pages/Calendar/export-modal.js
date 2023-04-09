import React, { useState } from "react"
import { Modal, Button, Form, DatePicker, Radio, Input, Select } from "antd"
import moment from "moment"
import { withTranslation } from "react-i18next";
import { get, post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"

const { Option } = Select

const { RangePicker } = DatePicker
const { TextArea } = Input
const ExportCalendarModel = (props) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(1);
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("authUser"))

  const handleFinish = values => {
    setLoading(true);
    console.log(values.month);
    get(`${url.GET_STAFFS}/${user.account.id}/calendar/export?from=${values.month[0].format("DD/MM/YYYY")}&to=${values.month[1].format("DD/MM/YYYY")}&sendMail=true`).then(
      res => {
        console.log(res);
        setLoading(false);
        window.location.href = process.env.REACT_APP_API_HOST + "/" + res.data;
      }
    )
  }


  return (
    <>
      <Button danger onClick={() => setOpen(true)}> {props.t("Export")}</Button>
      <Modal
        title={props.t("Export Calendar")}
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
            name="month"
            label={props.t("Month")}
            style={{ margin: "20px 0 10px 0" }}
            rules={[{ required: true, message: props.t("Please input the month range!") }]}
          >
            <RangePicker format={"MM/YYYY"} picker="month" disabledDate={current => current.isAfter(moment().subtract(1, "month"))}/>
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", gap: 10 }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                {props.t("Export")}
              </Button>
              <Button onClick={() => setOpen(false)}>{props.t("Cancel")}</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default withTranslation()(ExportCalendarModel)
