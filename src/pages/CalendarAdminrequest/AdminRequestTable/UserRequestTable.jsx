import React, { useState, useEffect } from "react"
import { Spin, Table } from "antd"
import { columns } from "./columns"
import { get, post } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const AdminRequestTable = () => {
  const [data, setData] = useState([])
  const [size, setSize] = useState(0)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    page: 1,
    size: 10
  })

  const doAccept = (id) => {
    post(`${url.TIME_ADJUSTMENT}?timeAdjustmentId=${id}&accept=true`).then((data) => {
      console.log(data);
      setLoading(true)
      get(`${url.EDIT_CALENDAR}/admin`, {
        query: filter
      }).then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(() => {
        setLoading(false)
      })
    })
  }

  const doDenied = (id) => {
    post(`${url.TIME_ADJUSTMENT}?timeAdjustmentId=${id}&accept=false`).then((data) => {
      console.log(data);
      setLoading(true)
      get(`${url.EDIT_CALENDAR}/admin`, {
        query: filter
      }).then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(() => {
        setLoading(false)
      })
    })
  }


  useEffect(() => {
    setLoading(true)
    get(`${url.EDIT_CALENDAR}/admin`, {
      query: filter
    }).then(res => {
      setData(res.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })

    
    get(`${url.EDIT_CALENDAR}/admin/size`, {
      query: filter
    }).then(res => {
      setSize(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [filter])

  const onPageChange = (page, size) => {
    setFilter({
      page,
      size
    })
  }

  return (
    <Spin spinning={loading}>
      <Table
        columns={columns(doAccept, doDenied)}
        dataSource={data || []}
        bordered
        scroll={{ y: 500 }}
        pagination={{
          total: size,
          current: filter.page,
          pageSize: filter.size,
          defaultPageSize: 10,
          onChange: onPageChange,
          pageSizeOptions: ["10", "20"],
        }}
        size="small"
      />
    </Spin>
  )
}

export default AdminRequestTable