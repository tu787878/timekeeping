import React, { useState } from "react"
import { Button, Form } from "antd"
import AccountForm from "./account-form"
import RoleForm from "./role-form"
import JobForm from "./job-form"
import { GET_STAFFS } from "../../../helpers/url_helper"
import { post } from "../../../helpers/api_helper"
import { message } from "antd"
import { useForm } from "rc-field-form"

const NewStaffForm = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleSubmit = values => {
    console.log(values)
    setLoading(true)
    values.capabilities = []

    if(values.workingTimes){
      values.workingTimes = values.workingTimes.map(w => {
        w.timeFrom = w.timeFrom.format("HH:mm")
        w.timeTo = w.timeTo.format("HH:mm")
        return w;
      })
    }else{
      values.workingTimes =  []
    }



    post(`${GET_STAFFS}`, values)
      .then(res => {
        setLoading(false)
        form.resetFields()
        message.success("Create successfully")
      })
      .catch(error => {
        setLoading(false)
      })
  }

  return (
    <div>
      <Form
        form={form}
        name="account-form"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ width: "100%" }}
      >
        <AccountForm />
        <RoleForm />
        <JobForm />
        <Form.Item>
          <Button htmlType="submit" type="primary" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NewStaffForm
