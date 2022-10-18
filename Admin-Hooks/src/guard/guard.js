import React from 'react';
import { connect } from 'react-redux';

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

const AccessControl = ({
  user,
  userPermissions,
  allowedPermissions,
  children,
  renderNoAccess,
  accessCheck,
  extraAccessData,
  id
}) => {
  let permitted;
  // when an accessCheck function is provided, ensure that passes as well as the permissions
  if (accessCheck) {
    permitted =
      accessCheck(extraAccessData, user) &&
      checkPermissions(userPermissions, allowedPermissions, id);
  } else {
    // otherwise only check permissions
    permitted = checkPermissions(userPermissions, allowedPermissions, id);
  }

  if (permitted) {
    return children;
  }
  return renderNoAccess();
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  userPermissions: [],
  renderNoAccess: () => null,
};

// Compose AccessControl component with redux

export default connect(state => ({
  userPermissions: JSON.parse(localStorage.getItem("authUser")) && JSON.parse(localStorage.getItem("authUser")).account.accountRole.capabilities,
  user: JSON.parse(localStorage.getItem("authUser")),
}))(AccessControl);
