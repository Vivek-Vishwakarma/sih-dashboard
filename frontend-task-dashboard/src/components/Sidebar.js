import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <h3 style={{ textAlign: "center", margin: 20 }}>File Manager</h3>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem
          style={{ marginTop: 5 }}
          icon={<BsFillArrowRightCircleFill />}
        >
          <Link to="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem style={{ marginTop: 5 }} icon={<AiFillPlusCircle />}>
          <Link to="/newtask">New File</Link>
        </MenuItem>
        <SubMenu style={{ marginTop: 5 }} title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
      {/* <SidebarFooter style={{textAlign: "center", marginTop : "20px", marginBottom : "20px"}}>
        Made by{" "}
        <a
          href="https://github.com/Vivek-Vishwakarma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivek Vishwakarma
        </a>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default Sidebar;
