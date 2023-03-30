import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import { del, get, post } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"
import { Select } from "antd"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { DatePicker, Button, Form, Input, Modal, Radio, Tag, Checkbox } from "antd"
import {
  DeleteTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import dayjs from 'dayjs';
import { Card, CardBody, Col, Row, CardHeader, CardTitle } from "reactstrap"

const CollectionCreateForm = ({ open, onCreate, onCancel, tr }) => {
  const [locations, setLocations] = useState([])
  const [form] = Form.useForm();

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = () => {
    get(`${url.GET_LOCATIONS}`)
      .then(res => {
        console.log(res);
        if (res) {
          setLocations(res.data);
          console.log(res.data);
        }
        else {
          setLocations([]);
        }
      })
      .catch(error => {
        setLocations([]);
      })
  }


  return (
    <Modal
      open={open}
      title={tr("Add a new holiday")}
      okText={tr("Add")}
      cancelText={tr("Cancel")}
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
          label={tr("Name")}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["location", "id"]} label={tr("Location")}>
          <Select allowClear mode="multiple">
            {locations.map(location => {
              return (
                <Select.Option key={location.id} value={location.id}>
                  {location.name}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item name="date" format={"DD/MM/YYYY"} label={tr("Date")}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="isEveryYear" valuePropName="checked">
          <Checkbox>{tr("Every Year")}</Checkbox>
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
      year: year.format("YYYY"),
      locations: values.location.id,
      isEveryYear: values.isEveryYear ? 1 : 0
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
        // TODO: convert to map by location!!
        let abc = new Map();
        data.data.forEach(el => {
          let key = el.location.name;
          if (!abc.has(key)) {
            abc.set(key, new Array());
          }
          abc.get(key).push(el);
        });
        console.log(abc);

        setHolidays(abc)
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
          <Breadcrumbs title={props.t("Holiday")} breadcrumbItem={props.t("Holiday")} />
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
                    {props.t("New Holiday")}
                  </Button>
                  <CollectionCreateForm
                    open={open}
                    onCreate={onCreate}
                    onCancel={() => {
                      setOpen(false);
                    }}
                    tr={props.t}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          {
          Array.from(holidays.entries()).map((entry) => {
            const [key, value] = entry;
            console.log(key);
            return (
              <>
              <Row>
                <Col>
                  <Card>
                  {/* <CardHeader>
                    {key}
                  </CardHeader> */}
                    <CardBody>
                    <CardTitle tag="h5">
                      {key}
                    </CardTitle>
                      {value.map((holiday) => {
                        return (
                          <>
                            <Tag color="magenta">{holiday.date}</Tag> <Tag color="blue">{holiday.name}</Tag>  <DeleteTwoTone onClick={() => onDeleteHoliday(holiday.id)} style={{ fontSize: "15px" }} twoToneColor={"red"} />
                            <br /><br />
                          </>
                        );
                      })}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              </>
            )
          })}


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
)(withRouter(withTranslation()(EditHoliday)))
