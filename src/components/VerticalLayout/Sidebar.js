import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";
import { get } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
import { Link } from "react-router-dom";

// import logo from "../../assets/images/tcg/tcg-dark.png";
import logoLightPng from "../../assets/images/tcg/tcg-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

const Sidebar = props => {
  const [logo, setLogo] = useState();

  useEffect(() => {
    onGetHoliday()
}, [])

  const onGetHoliday = () => {
    get(url.BASE + "/general-setting?key=logo")
        .then(data => {
            console.log(data.data);
            setLogo(process.env.REACT_APP_API_HOST+data.data.logo.settingValue)
        }).catch(err => {
            console.log(err);
        })
}

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            {/* <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span> */}
            <span className="logo-lg">
              <img src={logo} alt="" height="44" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            {/* <span className="logo-sm">
              <img src={logoLightPng} alt="" height="22" />
            </span> */}
            <span className="logo-lg">
              <img src={logo} alt="" height="44" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
