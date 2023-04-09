import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { get, put } from "../helpers/api_helper"
import * as url from "../helpers/url_helper"
import axios from 'axios'
const checkPermissions = (accountRole = {}, allowedPermissions, id) => {

  get(url.BASE + "/account/checkToken").then((data) => {
    if (accountRole.roleName === "ADMIN") return true;
    let userPermissions = accountRole?.capabilities;
    if (allowedPermissions == undefined || allowedPermissions.length === 0) {
      return true;
    }

    const res = allowedPermissions.map(permission => {
      return permission + id;
    })

    return userPermissions?.some(permission =>
      res.includes(permission)
    );
  }).catch((err) => {
    localStorage.removeItem("authUser");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000)
  })
  return true;

};

const checkWhiteList = () => {

  axios.get("https://geolocation-db.com/json/").then(res => {
    console.log(res.data);
    get(url.BASE + "/authenticate/checkIp?ipv4=" + res.data.IPv4).then(data => {
      if(data.code == 1) {
        setTimeout(() => {
          window.location.href = "/authentication";
        }, 1000)
        return false
      }
      else return true;
    }).catch(err => {
      return false;
    })

    return true;
  }).catch((err) => {
    return true;
  })

  return true;
};


const Authmiddleware = ({
  component: Component,
  layout: Layout,
  id,
  allowedPermissions,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {

      if(props.location.pathname !== "/authentication"){
        checkWhiteList();
      }

      let user = JSON.parse(localStorage.getItem("authUser"));

      if (isAuthProtected && (!user || !checkPermissions(user?.account?.accountRole, allowedPermissions, id))) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  id: PropTypes.any,
  allowedPermissions: PropTypes.array,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware;
