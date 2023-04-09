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
import { Button, Table } from "antd"
import {
  DeleteTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import dayjs from 'dayjs';
import { Card, CardBody, Col, Row, CardHeader, CardTitle } from "reactstrap"

const IPList = props => {
  const [ips, setIPs] = useState([]);

  const columns = [
    {
      title: props.t("IPV4"),
      dataIndex: 'ipv4',
    },
    {
      title:  props.t("Address"),
      dataIndex: 'address',
    },
    {
      title: props.t("User"),
      dataIndex: 'user',
    }
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    
    selectedRowKeys.forEach(ip => {
      del(url.BASE + "/IPWhiteList?id=" + ip.id)
        .then(res => {
          console.log(res)
          setIPs(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    })
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection =  {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const onGetIps = () => {
    get(url.BASE + "/IPWhiteList")
      .then(data => {
        console.log(data);
        setIPs(data.data)
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    onGetIps()
  }, [])

  //meta title
  document.title = "IPList Manager | TCG - Admin & Dashboard"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={props.t("IPList")} breadcrumbItem={props.t("IPList")} />
          <Row>
            <Col lg="12">

              <Card>
                <CardBody>
                  <div>
                    <div
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      <Button danger onClick={start} disabled={!hasSelected} loading={loading}>
                        {props.t("Remove")}
                      </Button>
                      <span
                        style={{
                          marginLeft: 8,
                        }}
                      >
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                      </span>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={ips} rowKey={record => record}/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default (withRouter(withTranslation()(IPList)))
