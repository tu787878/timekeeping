import React, { useState } from "react"
import { Button, Form } from "antd"
import AccountForm from "./account-form"
import RoleForm from "./role-form"
import JobForm from "./job-form"
import { GET_STAFFS } from "../../../helpers/url_helper"
import { post } from "../../../helpers/api_helper"
import { message } from "antd"

const NewStaffForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = values => {
    console.log(values)
    setLoading(true)
    post(`${GET_STAFFS}`, values)
      .then(res => {
        setLoading(false)
        message.success("Create successfully")
      })
      .catch(error => {
        setLoading(false)
      })
  }

  return (
    <div>
      <Form
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
