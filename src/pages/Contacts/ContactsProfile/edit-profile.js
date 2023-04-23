import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,
    Table,
} from "reactstrap";

// TableContainer
import { useParams } from "react-router-dom";
import { Avatar, message, Select } from "antd";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Images
import profile1 from "assets/images/profile-img.png";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
// import charts
import { getUserProfile } from "store/actions";
import { get, put } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const EditProfile = props => {

    //meta title
    document.title = "Edit Profile | TCG Web & Marketing";

    const [info, setInfo] = useState(null);
    const [changePasswordErr, setChangePasswordErr] = useState(null);
    const [form] = Form.useForm()
    const [form2] = Form.useForm()
    // useEffect(() => {
    //   onGetUserProfile();
    // }, [onGetUserProfile]);

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.success(props.t("Edit profile success!"));
    };
    const getUser = () => {
        let u = url.GET_STAFFS + "/-1";
        get(u).then((data) => {
            setInfo(data.data)
            form.setFieldsValue(data.data)
        })
    }
    const onFinish = (values) => {
        console.log('Success:', values.userDetail);
        put(url.GET_STAFFS + "/userDetail", values.userDetail)
            .then((data) => {
                getUser();
                success()
            }).catch(err => {
                console.log(err);
            })
    };

    const onFinish2 = (values) => {
        console.log('Success:', {oldPassword:values.oldPassword,password:values.password});
        put(url.GET_STAFFS + "/change-password", {oldPassword:values.oldPassword,password:values.password})
            .then((data) => {
                console.log(data);
                setTimeout(()=>{
                    window.location.href = "/login";
                }, 1000)
            }).catch(err => {
                console.log(JSON.parse(err.request.response).message);
                setChangePasswordErr(JSON.parse(err.request.response).message)
                messageApi.error(JSON.parse(err.request.response).message);
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        getUser()
    }, [])

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                {props.t("Change Avatar")}
            </div>
        </div>
    );

    return (
        <React.Fragment>
            {contextHolder}
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title={props.t("Staffs")} breadcrumbItem={props.t("Edit Profile")} />

                    <Row>
                        <Col xl="12">
                            <Card className="overflow-hidden">
                                <div className="bg-primary bg-soft">
                                    <Row>
                                        <Col xs="7">
                                            <div className="text-primary p-3">
                                                <h5 className="text-primary">Hi, What's up!</h5>
                                                <p>It will seem like simplified</p>
                                            </div>
                                        </Col>
                                        <Col xs="5" className="align-self-end">
                                            <img src={profile1} alt="" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <Row>
                                        <Col sm="4">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                {(info?.userDetail.avatar !== "") ? <Avatar src={info?.userDetail.avatar} /> : <div className="avatar-md">
                                                    <span className="avatar-title rounded-circle bg-info text-white font-size-24">
                                                        {info?.userDetail.lastName.charAt(0)}
                                                    </span>
                                                </div>}
                                            </div>
                                            <h5 className="font-size-15 text-truncate">
                                                {info?.userDetail?.firstName} {info?.userDetail?.lastName}
                                            </h5>
                                            <p className="text-muted mb-0 text-truncate">
                                                {info?.designation}
                                            </p>
                                            {/* <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                                            </Upload> */}
                                        </Col>

                                        <Col sm={8}>
                                            <div className="pt-4">
                                                <Row>
                                                    <Col xs="8">
                                                        <p className="text-muted mb-0">{props.t("Username")}</p>
                                                        <h5 className="font-size-12">
                                                            {info?.username}
                                                        </h5>

                                                    </Col>

                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">{props.t("Personal Information")}</CardTitle>
                                    <Form form={form}
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 12,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        initialValues={info}
                                    >
                                        <Form.Item
                                            name={["userDetail", "email"]}
                                            label={props.t("Email")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "firstName"]}
                                            label={props.t("First Name")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "lastName"]}
                                            label={props.t("Last Name")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "phone"]}
                                            label={props.t("Phone")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "address"]}
                                            label={props.t("Address")}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            name={["userDetail", "taxNumber"]}
                                            label={props.t("Tax number")}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            name={["userDetail", "rentenNumber"]}
                                            label={props.t("Rentensnummer")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "insuranceNumber"]}
                                            label={props.t("Insurance number")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "insuranceProvider"]}
                                            label={props.t("Insurance Provider")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "passport"]}
                                            label={props.t("Passport number")}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "residencePermit"]}
                                            label={props.t("Residence permit")}
                                        >
                                            <Select>
                                                <Select.Option value="UNLIMIT">{props.t("Permanent")}</Select.Option>
                                                <Select.Option value="LIMIT">{props.t("Temporary")}</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name={["userDetail", "residencePermitDate"]}
                                            label={props.t("Residence permit until")}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            wrapperCol={{
                                                offset: 5,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit">
                                            {props.t("Save")}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">{props.t("Change password")}</CardTitle>
                                    <Form
                                        form={form2}
                                        name="register"
                                        onFinish={onFinish2}
                                        scrollToFirstError
                                    >
                                        <Form.Item
                                            name="oldPassword"
                                            label={props.t("Old Password")}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: props.t("Please input your old password!"),
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            label={props.t("New Password")}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: props.t("Please input your new password!"),
                                                },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item
                                            name="confirm"
                                            label={props.t("Confirm Password")}
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: props.t("Please input your password again!"),
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error(props.t("The two passwords that you entered do not match!")));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        {/* {changePasswordErr ? <p color="red">{changePasswordErr}</p> : null} */}
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 10,
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
        </React.Fragment>
    );
};

EditProfile.propTypes = {
    userProfile: PropTypes.any,
    onGetUserProfile: PropTypes.func,
};

const mapStateToProps = ({ contacts }) => ({
    userProfile: contacts.userProfile,
});

const mapDispatchToProps = dispatch => ({
    onGetUserProfile: (id) => dispatch(getUserProfile(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withTranslation()(EditProfile)));
