import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Button, List, Card } from 'antd';
import {
  getAllNotifications,
  getTotalNotifications
} from "store/actions"
import {
  Container,
  Row,
  CardBody,
} from "reactstrap"

import { GET_NOTIFICATIONS } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";

import NotiItem from "./noti-item";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Notification = props => {
  const { onGetAllNotis, onGetTotalNotis } = props

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);

  const onGetNotis  = () => {
    get(GET_NOTIFICATIONS + "?total=" + size + "&page=" + page)
    .then((res) => {
      setInitLoading(false);
      setData(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    onGetNotis();
  }, []);

  // useEffect(() => {
  //   let paging = { size: size, page: page }
  //   onGetAllNotis(paging)
  // }, [onGetAllNotis])
  // useEffect(() => {
  //   onGetTotalNotis()
  // }, [onGetTotalNotis])

  const doReadAll = () => {
    get(GET_NOTIFICATIONS + "/doReadAll")
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  }

  const onLoadMore = () => {

    setLoading(true);
    // setList(
    //   data.concat(
    //     [...new Array(count)].map(() => ({
    //       loading: true,
    //       name: {},
    //       picture: {},
    //     })),
    //   ),
    // );
    get(GET_NOTIFICATIONS + "?total=" + size + "&page=" + page + 1)
      .then((res) => {
        if (res.data.length == 0) setMore(false);
        const newData = data.concat(res.data);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    setPage(page + 1);
  };
  const loadMore =
    more && !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  //meta title
  document.title = "Notifications | TCG - Web & Marketing"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title={
              (
                <>
                  Notifications
                </>
              )
            }

            breadcrumbItem="Notifications"
          />

          <Row>
            <Card title={<Button onClick={doReadAll} type="primary">Mark Read all</Button>} >
              <CardBody>
                <Row>
                  <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                      <NotiItem item={item} />
                    )}
                  />
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  )
}

Notification.propTypes = {
  allNotifications: PropTypes.any,
  totalNotifications: PropTypes.any
}

const mapStateToProps = ({ Notifications }) => ({
  allNotifications: Notifications.allNotifications,
  totalNotifications: Notifications.totalNotifications
})

const mapDispatchToProps = dispatch => ({
  onGetAllNotis: (paging) => dispatch(getAllNotifications(paging)),
  onGetTotalNotis: () => dispatch(getTotalNotifications())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Notification))
