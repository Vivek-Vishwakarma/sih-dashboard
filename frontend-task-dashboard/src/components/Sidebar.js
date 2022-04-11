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
import { Link, useNavigate } from "react-router-dom";
import {FaSkullCrossbones} from "react-icons/fa"
import "../App.css"
import { Button } from "@mui/material";
const Sidebar = ({user, dashPath, newTaskPath}) => {
  const history = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("admin")
    history("/")
  }

  return (
    <ProSidebar className="proSidebar" collapsedWidth="220px" collapsed>
      <SidebarHeader>
        <h3 className="heading"> File Manager</h3>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem
          style={{ marginTop: 5 }}
          icon={<BsFillArrowRightCircleFill />}
        >
          <Link to={dashPath}>Dashboard</Link>
        </MenuItem>
        {user && <MenuItem style={{ marginTop: 5 }} icon={<AiFillPlusCircle />}>
          <Link to={newTaskPath}>New File</Link>
        </MenuItem>}
        <MenuItem
          style={{ marginTop: 5 }}
          icon={<FaSkullCrossbones />}
        >
          <Button color="error" variant="contained" onClick={logout}>Logout</Button>
        </MenuItem>
        <SubMenu style={{ marginTop: 5 }} title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
