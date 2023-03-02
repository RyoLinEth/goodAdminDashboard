/// Menu
import React, { Component, useContext, useEffect, useReducer, useState } from "react";
//import Metismenu from "metismenujs";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

/// Link
import { Link, NavLink } from "react-router-dom";

// import { MenuList } from './Menu';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

export function NavMenuToggle() {
  setTimeout(() => {
    let mainwrapper = document.querySelector("#main-wrapper");
    // mainwrapper.classList.add("menu-toggle");
    mainwrapper.classList.remove("menu-toggle");
  }, 200);
}

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
    language,
  } = useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {


  }, []);

  //For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  const handleMenuActive = status => {

    setState({ active: status });

    if (state.active === status) {

      setState({ active: "" });
    }

  }
  const handleSubmenuActive = (status) => {

    setState({ activeSubmenu: status })
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" })

    }

  }
  // Menu dropdown list End

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  return (
    <div
      className={`deznav  border-right ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? hideOnScroll > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {MenuList(language.value).map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "menu-title") {
              return (
                <li className={menuClass} key={index} >{data.title}</li>
              )
            } else {
              return (
                //分類被選取 反白
                <li className={` ${state.active === data.title ? 'mm-active' : ''}`}
                  key={index}
                >

                  {data.content && data.content.length > 0 ?
                    <Link to={"#"}
                      className="has-arrow"
                      onClick={() => {
                        // 收放Sidebar中 分類的選單 比如收放 Token這選單
                        handleMenuActive(data.title)
                      }}
                    >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                    :
                    <NavLink to={data.to} onClick={() => {
                      NavMenuToggle();
                    }}>
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </NavLink>
                  }
                  {data.content &&
                    <Collapse in={state.active === data.title ? true : false}>
                      <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                        {data.content && data.content.map((data, index) => {
                          return (
                            <li key={index}
                              className={`${state.activeSubmenu === data.title ? "mm-active" : ""}`}
                              style={{ zIndex: '200' }}
                            >
                              {data.content && data.content.length > 0 ?
                                <>
                                  <NavLink to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                    onClick={() => {
                                      handleSubmenuActive(data.title)
                                    }}
                                  >
                                    {data.title}
                                  </NavLink>
                                  <Collapse in={state.activeSubmenu === data.title ? true : false}>
                                    <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                      {data.content && data.content.map((data, index) => {
                                        return (
                                          <>
                                            <li key={index} >
                                              <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                            </li>
                                          </>
                                        )
                                      })}
                                    </ul>
                                  </Collapse>
                                </>
                                :
                                <div onClick={() => {
                                  NavMenuToggle();
                                }}>
                                  <Link to={data.to}>
                                    {data.title}
                                  </Link>
                                </div>
                              }
                            </li>
                          )
                        })}
                      </ul>
                    </Collapse>
                  }
                </li>
              )
            }
          })}
        </ul>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;


export const MenuList = (language) => [
  //Dashboard
  {
    title:
      language === 'english' 
        ? 'Dashboard'
        : language === 'chinese' ? '首页' : '首頁',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">grid_view</i>,
    to: 'dashboard'
  },
  //Token
  {
    title: 
    language === 'english' 
      ? 'Token'
      : language === 'chinese' ? '代币' : '代幣',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">currency_exchange</i>,
    content: [
      {
        title: language === 'english' 
        ? 'Create Token'
        : language === 'chinese' ? '创建代币' : '創建代幣',
        to: 'create-token',
      },
      {
        title: language === 'english' 
        ? 'Create NFT Token'
        : language === 'chinese' ? '创建NFT' : '創建NFT',
        to: 'under-construction',
      },
      {
        title: language === 'english' 
        ? 'My Token List'
        : language === 'chinese' ? '我的代币列表' : '我的代幣列表',
        to: 'token-list',
      },
      {
        title: language === 'english' 
        ? 'Control Panel'
        : language === 'chinese' ? '控制台' : '控制台',
        to: 'control-panel',
      },
      {
        title: language === 'english' 
        ? 'Token Locker'
        : language === 'chinese' ? '代币锁' : '代幣鎖',
        to: 'control-panel',
      },
      {
        title: language === 'english' 
        ? 'MultiSend Token'
        : language === 'chinese' ? '批量发送代币' : '批量發送代幣',
        to: 'control-panel',
      },
    ]
  },
  //Token
  {
    title: language === 'english' 
    ? 'Presale / IDO'
    : language === 'chinese' ? '预售 / IDO' : '預售 / IDO',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">generating_tokens</i>,
    content: [
      {
        title: language === 'english' 
        ? 'Create Presale'
        : language === 'chinese' ? '创建预售' : '創建預售',
        to: 'create-token',
      },
      {
        title: language === 'english' 
        ? 'Create IDO'
        : language === 'chinese' ? '创建 IDO' : '創建 IDO',
        to: 'token-list',
      },
    ]
  },
  {
    title: language === 'english' 
    ? 'Launchpads'
    : language === 'chinese' ? '发射台' : '發射台',
    
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">rocket_launch</i>,
    content: [
      {
        title: language === 'english' 
        ? 'Presale List'
        : language === 'chinese' ? '预售列表' : '预售列表',
        to: 'create-token',
      },
      {
        title: language === 'english' 
        ? 'IDO List'
        : language === 'chinese' ? 'IDO 列表' : 'IDO 列表',
        to: 'token-list',
      },
    ]
  },
  {
    title: 'Social',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">emoji_people</i>,
    content: [
      {
        title: 'Send Message',
        to: 'create-token',
      },
      {
        title: 'My Message Box',
        to: 'token-list',
      },
    ]
  },
  {
    title: 'Visualize',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">remove_red_eye</i>,
    content: [
      {
        title: 'Send Token',
        to: 'create-token',
      },
      {
        title: 'Make a Gift Box',
        to: 'token-list',
      },
      {
        title: 'Watch My Gift Boxes',
        to: 'token-list',
      },
    ]
  },
  {
    title: 'Trading',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">trending_up</i>,
    content: [
      {
        title: 'Market',
        to: 'market',
      },
      {
        title: 'ICO Listing',
        to: 'ico-listing',
      },
      {
        title: 'P2P',
        to: 'p2p',
      },
      {
        title: 'Future',
        to: 'future',
      },
      {
        title: 'Intraday Trading',
        to: 'intraday-trading',
      },
    ]
  },
  //Crypto
  {
    title: 'Crypto',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">currency_bitcoin</i>,
    content: [
      {
        title: 'Market Watch',
        to: 'crypto',
      },
      {
        title: 'ICO Listing Filter',
        to: 'ico-listing-filter',
      },
      {
        title: 'Coin Details',
        to: 'coin-details',
      },
      {
        title: 'Exchange',
        to: 'exchange',
      },
      {
        title: 'Banking',
        to: 'banking',
      },
    ]
  },
  //Reports
  {
    title: 'Reports',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">description</i>,
    content: [
      {
        title: 'History',
        to: 'history'
      },
      {
        title: 'Orders',
        to: 'orders'
      },
      {
        title: 'Report',
        to: 'reports'
      },
      {
        title: 'User',
        to: 'user'
      },
      {
        title: 'Contacts',
        to: 'contact'
      },
      {
        title: 'Activity',
        to: 'activity'
      },
    ],
  },

  //Apps
  {
    title: 'Apps',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> app_registration </i>,
    content: [
      {
        title: 'Profile',
        to: 'app-profile'
      },
      {
        title: 'Edit Profile',
        to: 'edit-profile'
      },
      {
        title: 'Post Details',
        to: 'post-details'
      },
      {
        title: 'Email',
        //to: './',
        hasMenu: true,
        content: [
          {
            title: 'Compose',
            to: 'email-compose',
          },
          {
            title: 'Index',
            to: 'email-inbox',
          },
          {
            title: 'Read',
            to: 'email-read',
          }
        ],
      },
      {
        title: 'Calendar',
        to: 'app-calender'
      },
      {
        title: 'Shop',
        //to: './',
        hasMenu: true,
        content: [
          {
            title: 'Product Grid',
            to: 'ecom-product-grid',
          },
          {
            title: 'Product List',
            to: 'ecom-product-list',
          },
          {
            title: 'Product Details',
            to: 'ecom-product-detail',
          },
          {
            title: 'Order',
            to: 'ecom-product-order',
          },
          {
            title: 'Checkout',
            to: 'ecom-checkout',
          },
          {
            title: 'Invoice',
            to: 'ecom-invoice',
          },
          {
            title: 'Customers',
            to: 'ecom-customers',
          },
        ],
      },
    ],
  },
  //Charts
  {
    title: 'Charts',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> assessment </i>,
    content: [

      {
        title: 'RechartJs',
        to: 'chart-rechart',
      },
      {
        title: 'Chartjs',
        to: 'chart-chartjs',
      },
      {
        title: 'Sparkline',
        to: 'chart-sparkline',
      },
      {
        title: 'Apexchart',
        to: 'chart-apexchart',
      },
    ]
  },
  //Boosttrap
  {
    title: 'Bootstrap',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> favorite </i>,
    content: [
      {
        title: 'Accordion',
        to: 'ui-accordion',
      },
      {
        title: 'Alert',
        to: 'ui-alert',
      },
      {
        title: 'Badge',
        to: 'ui-badge',
      },
      {
        title: 'Button',
        to: 'ui-button',
      },
      {
        title: 'Modal',
        to: 'ui-modal',
      },
      {
        title: 'Button Group',
        to: 'ui-button-group',
      },
      {
        title: 'List Group',
        to: 'ui-list-group',
      },
      {
        title: 'Cards',
        to: 'ui-card',
      },
      {
        title: 'Carousel',
        to: 'ui-carousel',
      },
      {
        title: 'Dropdown',
        to: 'ui-dropdown',
      },
      {
        title: 'Popover',
        to: 'ui-popover',
      },
      {
        title: 'Progressbar',
        to: 'ui-progressbar',
      },
      {
        title: 'Tab',
        to: 'ui-tab',
      },
      {
        title: 'Typography',
        to: 'ui-typography',
      },
      {
        title: 'Pagination',
        to: 'ui-pagination',
      },
      {
        title: 'Grid',
        to: 'ui-grid',
      },
    ]
  },
  //plugins
  {
    title: 'Plugins',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> extension </i>,
    content: [
      {
        title: 'Select 2',
        to: 'uc-select2',
      },
      // {
      //     title:'Noui Slider',
      //     to: 'uc-noui-slider',
      // },
      {
        title: 'Sweet Alert',
        to: 'uc-sweetalert',
      },
      {
        title: 'Toastr',
        to: 'uc-toastr',
      },
      {
        title: 'Jqv Map',
        to: 'map-jqvmap',
      },
      {
        title: 'Light Gallery',
        to: 'uc-lightgallery',
      },
    ]
  },
  //Widget
  {
    title: 'Widget',
    //classsChange: 'mm-collapse',
    iconStyle: <i className="bi bi-gear-wide"></i>,
    to: 'widget-basic',
  },
  //Forms
  {
    title: 'Forms',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> insert_drive_file </i>,
    content: [
      {
        title: 'Form Elements',
        to: 'form-element',
      },
      {
        title: 'Wizard',
        to: 'form-wizard',
      },
      {
        title: 'CkEditor',
        to: 'form-ckeditor',
      },
      {
        title: 'Pickers',
        to: 'form-pickers',
      },
      {
        title: 'Form Validate',
        to: 'form-validation',
      },

    ]
  },
  //Table
  {
    title: 'Table',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons"> table_chart </i>,
    content: [
      {
        title: 'Table Filtering',
        to: 'table-filtering',
      },
      {
        title: 'Table Sorting',
        to: 'table-sorting',
      },
      {
        title: 'Bootstrap',
        to: 'table-bootstrap-basic',
      },


    ]
  },
  //Pages
  {
    title: 'Pages',
    classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">article</i>,
    content: [
      {
        title: 'Error',
        hasMenu: true,
        content: [
          {
            title: 'Error 400',
            to: 'page-error-400',
          },
          {
            title: 'Error 403',
            to: 'page-error-403',
          },
          {
            title: 'Error 404',
            to: 'page-error-404',
          },
          {
            title: 'Error 500',
            to: 'page-error-500',
          },
          {
            title: 'Error 503',
            to: 'page-error-503',
          },
        ],
      },
      {
        title: 'Lock Screen',
        to: 'page-lock-screen',
      },

    ]
  },

]