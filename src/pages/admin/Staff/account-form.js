import React, { useEffect, useState } from "react"
import { Form, Input, Row, Col, Select } from "antd"
import { get } from "../../../helpers/api_helper"
import { GET_LOCATIONS } from "../../../helpers/url_helper"
import { withTranslation } from "react-i18next";
const AccountForm = (props) => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = () => {
    get(`${GET_LOCATIONS}`)
      .then(res => {
        console.log(res)
        if (res) {
          setLocations(res.data)
          console.log(res.data)
        } else {
          setLocation([])
        }
      })
      .catch(error => {
        setLocation([])
      })
  }

  return (
    <>
      {/* <h4>1. Account</h4> */}

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name={"location"} label={props.t("Location")} rules={[
              { required: true, message: props.t("Please input location!")},
            ]}>
            <Select allowClear>
              {locations.map(location => {
                return (
                  <Select.Option key={location.id} value={location.id}>
                    {location.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label={props.t("First name")}
            name="firstName"
            rules={[
              { required: true, message: props.t("Please input firstname!") },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={props.t("Last name")}
            name="lastName"
            rules={[{ required: true, message: props.t("Please input lastname!") }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label={props.t("Phone")}
            name="phone"
            rules={[
              { required: true, message: props.t("Please input phone number!")},
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={props.t("Email")}
            name="email"
            rules={[{ required: true, message: props.t("Please input email!") }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default withTranslation()(AccountForm)
