import React, { Fragment, useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Dropdown } from "react-bootstrap";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";
//import RightSideBar from "./RightSideBar";
import ChatBox from "../ChatBox";
import WalletConnect from "../../../mypages/WallectConnector";


const JobieNav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {

  const {
    changeLanguage,
  } = useContext(ThemeContext);

  const [CN, setCN] = useState(false);
  const [toggle, setToggle] = useState("");
  const [selectedLanNum, setSelectedLanNum] = useState(null);
  const onClick = (name) => setToggle(toggle === name ? "" : name);


  const handleDefaultAccountChange = (value) => {
    console.log(value)
  }

  const dropdownLanguages = [
    {
      value: 'english',
      label: 'English',
      text: 'English',
    },
    {
      value: 'chinese',
      label: 'Chinese',
      text: '简体中文',
    },
    {
      value: 'traditionalchinese',
      label: 'TraditionalChinese',
      text: '繁體中文',
    },
  ]
  return (
    <Fragment>
      <NavHader />
      <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      <div style={{ position: 'fixed', top: '15px', right: '155px', zIndex: '9999' }}>

        <div className="basic-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success">
              {selectedLanNum === null ? "Language" : dropdownLanguages[selectedLanNum].text}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                dropdownLanguages.map((language, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={
                        () => {
                          changeLanguage({ value: language.value, label: language.label })
                          setSelectedLanNum(index)
                        }
                      }
                    >
                      {language.text}
                    </Dropdown.Item>
                  )
                })
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div style={{ position: 'fixed', top: '15px', right: '15px', zIndex: '9999' }}>
        <WalletConnect defaultAccountChange={handleDefaultAccountChange} />
      </div>
      <SideBar />
    </Fragment>
  );
};

export default JobieNav;
