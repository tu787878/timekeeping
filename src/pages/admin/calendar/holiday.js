import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import { del, get, post } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { DatePicker, Button, Form, Input, Modal, Radio, Tag } from "antd"
import {
  DeleteTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import dayjs from 'dayjs';
import { Card, CardBody, Col, Row  } from "reactstrap"

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add a new holiday"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="Name"
        >
          <Input />
        </Form.Item>
        <Form.Item name="date" format={"DD/MM/YYYY"} label="Date">
        <DatePicker />

        </Form.Item>
      </Form>
    </Modal>
  );
};

const EditHoliday = props => {
  const [year, setYear] = useState(dayjs(new Date()));
  const [holidays, setHolidays] = useState([]);

  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
    let holiday = {
      date: values.date.format("DD/MM/YYYY"),
      name: values.name,
      year: year.format("YYYY")
    }
    console.log(holiday);
    post(url.BASE + "/holiday", holiday
    ).then(data => {
      console.log(data);
      onGetHoliday()
    }).catch(err => {
      console.log(err);
    })
  };

  const onGetHoliday = () => {
    get(url.BASE + "/holiday?year=" + year.format("YYYY"))
    .then(data => {
      console.log(data);
      setHolidays(data.data)
    }).catch(err => {
      console.log(err);
    })
  }

  const onDeleteHoliday = (id) => {
    del(url.BASE + "/holiday?id=" + id).then(data => {
      console.log(data);
      onGetHoliday()
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    onGetHoliday()
  }, [year])

  const onChange = (value) => {
    setYear(value);
  }

  //meta title
  document.title = "Holiday Manager | TCG - Admin & Dashboard"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Holiday" breadcrumbItem="Holiday" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <DatePicker defaultValue={year} onChange={onChange} picker="year" />
                  {" "}
                  <Button
                    type="primary"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    New Holiday
                  </Button>
                  <CollectionCreateForm
                    open={open}
                    onCreate={onCreate}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  {holidays.map((holiday)=>{
                    return (
                      <>
                        <Tag color="magenta">{holiday.date}</Tag> <Tag color="blue">{holiday.name}</Tag> <DeleteTwoTone onClick={() => onDeleteHoliday(holiday.id)} style={{fontSize:"15px"}} twoToneColor={"red"} />
                        <br/><br/>
                      </>
                    );
                  })}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

EditHoliday.propTypes = {}

const mapStateToProps = ({ }) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditHoliday))
