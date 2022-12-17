import React, { useState, useEffect } from "react"
import { Spin, Table } from "antd"
import { columns } from "./columns"
import { get, del } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const UserRequestTable = () => {
  const [data, setData] = useState([])
  const [size, setSize] = useState(0)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    page: 1,
    size: 10
  })
  const doCancel = (id) =>{
    console.log("cancel " + id);
    del(`${url.EDIT_CALENDAR}/${id}`).then((data)=>{
      console.log(data);
      setLoading(true)
      get(`${url.EDIT_CALENDAR}`, {
        query: filter
      }).then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(() => {
        setLoading(false)
      })
  
      get(`${url.EDIT_CALENDAR}/size`, {
        query: filter
      }).then(res => {
        setSize(res.data)
        console.log(res.data);
      }).catch(() => {
      })
    })
  }

  useEffect(() => {
    setLoading(true)
    get(`${url.EDIT_CALENDAR}`, {
      query: filter
    }).then(res => {
      setData(res.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })

    get(`${url.EDIT_CALENDAR}/size`, {
      query: filter
    }).then(res => {
      setSize(res.data)
      console.log(res.data);
    }).catch(() => {
    })
  }, [filter])

  const onPageChange = (page, size) => {
    console.log(page);
    setFilter({
      page,
      size
    })
  }

  return (
    <Spin spinning={loading}>
      <Table
        columns={columns(doCancel)}
        dataSource={data || []}
        bordered
        scroll={{y: 500}}
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

export default UserRequestTable