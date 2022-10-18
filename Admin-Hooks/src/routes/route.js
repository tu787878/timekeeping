import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const checkPermissions = (userPermissions, allowedPermissions, id) => {
  if (allowedPermissions == undefined || allowedPermissions.length === 0) {
    return true;
  }

  const res = allowedPermissions.map(permission => {
    return permission+id;
  })

  return userPermissions.some(permission =>
    res.includes(permission)
  );
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
      let user = JSON.parse(localStorage.getItem("authUser"));
      
      if (isAuthProtected && (!user || !checkPermissions(user.account.accountRole.capabilities, allowedPermissions, id))) {
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
