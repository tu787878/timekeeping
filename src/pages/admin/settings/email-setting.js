import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import { del, get, post } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"
import { Select } from "antd"
import { BlockPicker, ChromePicker } from "react-color";
import { withTranslation } from "react-i18next";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Checkbox, Form, Input, Upload, message } from 'antd';
const { TextArea } = Input;
import {
    DeleteTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import dayjs from 'dayjs';
import { Card, CardBody, Col, Row, CardHeader, CardTitle } from "reactstrap"

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};


const EmailSetting = props => {
    const [year, setYear] = useState(dayjs(new Date()));
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [checkInColor, setCheckInColor] = useState("rgb(255,0,0)");
    const [standByColor, setStandByColor] = useState("rgb(255,255,255)");
    const [checkOutColor, setCheckOutColor] = useState("rgb(255,0,0)");
    const [showNoti, setShowNoti] = useState(true);
    const [masterUsername, setMasterUsername] = useState("");
    const [masterPassword, setMasterPassword] = useState("");
    const [form] = Form.useForm()

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error(props.t("You can only upload JPG/PNG file!"));
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error(props.t("Image must smaller than 2MB!"));
            return false;
        }

        setFile(file)
        return true;
    };

    const handleChange = (info) => {
        console.log(info);
        getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
        });
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const [open, setOpen] = useState(false);
    

    const onGetHoliday = () => {
        get(url.BASE + "/general-setting?key=dateSendCalendar,adminEmails,businessPhone,businessAddress,emailCalendarMessage")
            .then(data => {
                console.log(data.data);
                form.setFieldsValue(data.data)
            }).catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        onGetHoliday()
    }, [])

    const onFinish = (values) => {
        console.log(values);

        if (values.dateSendCalendar) {
            values.dateSendCalendar = values.dateSendCalendar.settingValue
        }

        if (values.adminEmails) {
            values.adminEmails = values.adminEmails.settingValue
        }

        if (values.businessPhone) {
            values.businessPhone = values.businessPhone.settingValue
        }

        if (values.businessAddress) {
            values.businessAddress = values.businessAddress.settingValue
        }

        if (values.emailCalendarMessage) {
            values.emailCalendarMessage = values.emailCalendarMessage.settingValue
        }


        console.log('Success:', values);
        post(url.BASE + "/general-setting", values)
            .then(data => {
                console.log(data);
                onGetHoliday()
                message.success('Saved!');
            }).catch(err => {
                console.log(err);
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    //meta title
    document.title = "Email Settings | TCG - Admin & Dashboard"
    return (
        <>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={props.t("Email Settings")} breadcrumbItem={props.t("Email Settings")} />
                    <Row>
                        <Col lg="12">
                            <Card>
                                
                                <CardBody>
                                
                                    <Form
                                        form={form}
                                        name="basic"
                                        labelCol={{
                                            span: 10,
                                        }}
                                        wrapperCol={{
                                            span: 14,
                                        }}
                                        style={{
                                            maxWidth: 600,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            label={props.t("Business Phone")}
                                            name={["businessPhone", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label={props.t("Business Address")}
                                            name={["businessAddress", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label={props.t("Calendar Message")}
                                            name={["emailCalendarMessage", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label={props.t("Send mail at date")}
                                        >
                                            <Form.Item
                                                name={["dateSendCalendar", "settingValue"]}
                                                noStyle
                                            >
                                                <Input />
                                            </Form.Item>
                                            <p>{props.t("Email will send automatic at 12:00")}</p>
                                        </Form.Item>

                                       

                                        <Form.Item
                                            label={props.t("Admin emails")}
                                        >
                                            <Form.Item
                                                name={["adminEmails", "settingValue"]}
                                                noStyle
                                            >
                                                <TextArea placeholder={props.t("Each line for an email!")}/>
                                            </Form.Item>
                                            
                                            <p>{props.t("Each line for an email!")}</p>
                                        </Form.Item>

                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit">
                                            {props.t("Submit")}
                                            </Button>
                                        </Form.Item>


                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

EmailSetting.propTypes = {}

const mapStateToProps = ({ }) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withTranslation()(EmailSetting)));
