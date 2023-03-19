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


const EditGeneral = props => {
    const [year, setYear] = useState(dayjs(new Date()));
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [checkInColor, setCheckInColor] = useState("rgb(255,0,0)");
    const [checkOutColor, setCheckOutColor] = useState("rgb(255,0,0)");
    const [showNoti, setShowNoti] = useState(true);
    const [masterUsername, setMasterUsername] = useState("");
    const [masterPassword, setMasterPassword] = useState("");
    const [form] = Form.useForm()

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
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

    const resetAllWhiteList = () => {
        get(url.BASE + "/general-setting/resetWhiteList"
        ).then(data => {
            console.log(data);
            message.success('Removed all whitelist IP!');
        }).catch(err => {
            console.log(err);
        })
    }

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
        get(url.BASE + "/general-setting?key=businessName,logo,notifyText,showNotify, checkInColor, checkOutColor, masterUsername, masterPassword")
            .then(data => {
                console.log(data.data);
                if (data.data.showNotify) {
                    console.log(data.data.showNotify.settingValue);
                    data.data.showNotify.settingValue = data.data.showNotify.settingValue === "true" ? true : false
                    setShowNoti(data.data.showNotify.settingValue);
                }
                setImageUrl(data.data.logo.settingValue)
                setCheckInColor(data.data.checkInColor.settingValue);
                setCheckOutColor(data.data.checkOutColor.settingValue);
                setMasterPassword(data.data.masterPassword.settingValue)
                setMasterUsername(data.data.masterUsername.settingValue)
                form.setFieldsValue(data.data)
            }).catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        onGetHoliday()
    }, [])

    const onFinish = (values) => {

        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            // You can use any AJAX library you like
            fetch(url.UPLOAD_FILE, {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    values.logo = res.link

                    console.log(values);

                    if (values.businessName) {
                        values.businessName = values.businessName.settingValue
                    }
                    if (values.notifyText) {
                        values.notifyText = values.notifyText.settingValue
                    }

                    values.showNotify = values.showNotify.settingValue

                    values.checkInColor = checkInColor
                    values.checkOutColor = checkOutColor

                    values.masterUsername = values.masterUsername.settingValue
                    values.masterPassword = values.masterPassword.settingValue


                    console.log('Success:', values);
                    post(url.BASE + "/general-setting", values)
                        .then(data => {
                            console.log(data);
                            onGetHoliday()
                            message.success('Saved!');
                        }).catch(err => {
                            console.log(err);
                        })

                })
                .catch(() => {
                    message.error('upload failed.');
                })
                .finally(() => {
                });
        }
        else {
            console.log(values);

            if (values.businessName) {
                values.businessName = values.businessName.settingValue
            }
            if (values.notifyText) {
                values.notifyText = values.notifyText.settingValue
            }

            values.showNotify = values.showNotify.settingValue

            values.checkInColor = checkInColor
            values.checkOutColor = checkOutColor

            values.masterUsername = values.masterUsername.settingValue
            values.masterPassword = values.masterPassword.settingValue


            console.log('Success:', values);
            post(url.BASE + "/general-setting", values)
                .then(data => {
                    console.log(data);
                    onGetHoliday()
                    message.success('Saved!');
                }).catch(err => {
                    console.log(err);
                })
        }



    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    //meta title
    document.title = "General Settings | TCG - Admin & Dashboard"
    return (
        <>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="General Settings" breadcrumbItem="General Settings" />
                    <Row>
                        <Col lg="12">
                            <Button onClick={resetAllWhiteList} danger>
                                Reset all ip whitelist 
                            </Button>
                            <Card>
                                
                                <CardBody>
                                
                                    <Form
                                        form={form}
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
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
                                            label="Business name"
                                            name={["businessName", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Master Username"
                                            name={["masterUsername", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Master Password"
                                            name={["masterPassword", "settingValue"]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Logo">

                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt="avatar"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                ) : (
                                                    uploadButton
                                                )}
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item
                                            label="Notification text"
                                            name={["notifyText", "settingValue"]}
                                        >
                                            <TextArea rows={4} />
                                        </Form.Item>

                                        <Form.Item
                                            name={["showNotify", "settingValue"]}
                                            valuePropName="checked"
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                            onChange={(e) => {
                                                console.log(e.target.checked);
                                                setShowNoti(e.target.checked)
                                            }}
                                        >
                                            <Checkbox>Show notify</Checkbox>
                                        </Form.Item>

                                        <Form.Item
                                            label="Check in color"
                                        >
                                            {/* Block Picker from react-color and handling color on onChange event */}
                                            <ChromePicker

                                                disableAlpha={true}
                                                color={checkInColor}
                                                onChange={(color) => {
                                                    let colorStr = "rgb(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + ")"
                                                    setCheckInColor(colorStr)
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Check out color"
                                        >
                                            <ChromePicker

                                                disableAlpha={true}
                                                color={checkOutColor}
                                                onChange={(color) => {
                                                    let colorStr = "rgb(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + ")"
                                                    setCheckOutColor(colorStr)
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit">
                                                Submit
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

EditGeneral.propTypes = {}

const mapStateToProps = ({ }) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditGeneral))
