import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css"
const Sidebar = ({user}) => {
  return (
    <ProSidebar className="proSidebar">
      <SidebarHeader>
        <h3 className="heading"> File Manager</h3>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem
          style={{ marginTop: 5 }}
          icon={<BsFillArrowRightCircleFill />}
        >
          <Link to="/dashboard">Dashboard</Link>
        </MenuItem>
        {user && <MenuItem style={{ marginTop: 5 }} icon={<AiFillPlusCircle />}>
          <Link to="/newtask">New File</Link>
        </MenuItem>}
        <SubMenu style={{ marginTop: 5 }} title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
