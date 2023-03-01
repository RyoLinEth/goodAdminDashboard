import React, { Fragment, useState } from "react";

import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";
//import RightSideBar from "./RightSideBar";
import ChatBox from "../ChatBox";
import WalletConnect from "../../../mypages/WallectConnector";


const handleDefaultAccountChange = (value) => {
  console.log(value)
}

const JobieNav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {
  const [toggle, setToggle] = useState("");
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  return (
    <Fragment>

      <NavHader />
      <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      {/* <Header
          onNote={() => onClick("chatbox")}
          onNotification={() => onClick("notification")}
          onProfile={() => onClick("profile")}
          toggle={toggle}
          title={title}
          onBox={() => onClick("box")}
          onClick={() => ClickToAddEvent()}
        />  */}
      <div style={{ position: 'fixed', top:'20px', right:'20px', zIndex:'9999' }}>
        <WalletConnect defaultAccountChange={handleDefaultAccountChange} />
      </div>
      <SideBar />
    </Fragment>
  );
};

export default JobieNav;
