import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

import AccessControl from "../../guard/guard"
import { authProtectedContent, adminContent} from "../../common/data/sidebar-element"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  const renderLink = (object, i) =>{
    if (object.children.length == 0) {
      if (object.className != "") {
        return (
          <AccessControl
            key={i}
            allowedPermissions={[object.allowedPermissions]}
            id={object.id}
          >
            <li>
              <Link to={object.path}>
                <i className={`bx ${object.className}`}></i>
                <span>{props.t(object.contextId)}</span>
              </Link>
            </li>
          </AccessControl>
        )
      } else {
        return (
          <AccessControl
            key={i}
            allowedPermissions={[object.allowedPermissions]}
            id={object.id}
          >
            <li>
              <Link to={object.path}>
                <span>{props.t(object.contextId)}</span>
              </Link>
            </li>
          </AccessControl>
        )
      }
    } else {
      return (
        <AccessControl
          key={i}
          allowedPermissions={[object.allowedPermissions]}
          id={object.id}
        >
          <li>
            <Link to="/#" className="has-arrow">
              <i className={`bx ${object.className}`}></i>
              <span>{props.t(object.contextId)}</span>
            </Link>
            <ul className="sub-menu">
              {object.children.map(function (child, ic) {
                return (
                  <AccessControl
                    key={ic}
                    allowedPermissions={[child.allowedPermissions]}
                    id={child.id}
                  >
                    <li>
                      <Link to={child.path}>
                        {props.t(child.contextId)}
                      </Link>
                    </li>
                  </AccessControl>
                )
              })}
            </ul>
          </li>
        </AccessControl>
      )
    }

  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {
              authProtectedContent.map(function (object, i) {
                return renderLink(object, i);
              })
            }
            <AccessControl
              allowedPermissions={[""]}
              id="semi_admin"
            >
              <li className="menu-title">Admin</li>
            </AccessControl>

            {
              adminContent.map(function (object, i) {
                return renderLink(object, i);
              })
            }

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
