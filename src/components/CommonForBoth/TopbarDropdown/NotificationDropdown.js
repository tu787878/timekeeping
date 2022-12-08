import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import SockJsClient from 'react-stomp';
//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
//i18n
import { withTranslation } from "react-i18next";
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Moment from 'react-moment';

import { GET_NOTIFICATIONS } from "../../../helpers/url_helper";
import { del, get, post, put } from "../../../helpers/api_helper";

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const accountId = JSON.parse(localStorage.getItem("authUser")).account.id;
  const history = useHistory();

  const markRead = (item) => {
    if(item.read) return;
    get(GET_NOTIFICATIONS + "/markRead/" + item.id)
      .then((res) => {
        console.log(res);
      });
  }


  const openNotification = (msg) => {
    notification.open({
      message: msg.notification.sender.userDetail.firstName + ' ' + msg.notification.sender.userDetail.lastName,
      description: msg.notification.message,
      onClick: () => {
        history.push(msg.notification.link)
      },
      duration: 4,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const bearer = JSON.parse(localStorage.getItem("authUser")).accessToken;
  const [data, setData] = useState([]);
  const [unread, setUnread] = useState(0);

  const getNotis = () => {
    get(GET_NOTIFICATIONS)
      .then((res) => {
        setData(res.data);
      });
  }
  const getUnRead = () => {
    get(GET_NOTIFICATIONS + "/unread")
      .then((res) => {
        setUnread(res.data);
      });
  }
  useEffect(() => {
    getNotis();
    getUnRead();
  }, []);

  return (
    <React.Fragment>
      <SockJsClient url='http://localhost:8080/websocket-chat/'
        topics={[`/topic/noti/${accountId}`]}
        onConnect={() => {
          console.log("connected");
        }}
        onDisconnect={() => {
          console.log("Disconnected");
        }}
        onMessage={(msg) => {
          openNotification(msg);
          console.log(msg);
          getNotis();
          getUnRead();
        }}
        ref={(client) => {
          // this.clientRef = client
        }} />
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon position-relative"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          {unread > 0 ? <i className="bx bx-bell bx-tada" /> : <i className="bx bx-bell" />}
          {unread > 0 ? <span className="badge bg-danger rounded-pill">{unread}</span> : null}

        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {props.t("Notifications")} </h6>
              </Col>

            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            {data.map(item => {
              return (
                <Link key={item.id} onClick={()=>{markRead(item)}} to={item.notification.link} className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="bx bx-cart" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mt-0 mb-1">
                        {item.notification.sender.userDetail.firstName} {item.notification.sender.userDetail.lastName}
                      </h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          {item.notification.message}
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" />{" "}
                          {<Moment toNow>{item.createdTime}</Moment>}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link className="btn btn-sm btn-link font-size-14 text-center" to="/notifications">
              <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">{props.t("View More..")}</span>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(NotificationDropdown);

NotificationDropdown.propTypes = {
  t: PropTypes.any
};