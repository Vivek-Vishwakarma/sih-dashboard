import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaGem, FaHeart} from "react-icons/fa"
const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader><h3> File Manager</h3></SidebarHeader> 
    <Menu iconShape="square">
      <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
      <SubMenu title="Components" icon={<FaHeart />}>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
    <SidebarFooter>
        Made by{" "}
        <a
          href="https://github.com/Vivek-Vishwakarma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivek Vishwakarma
        </a>
      </SidebarFooter>
  </ProSidebar>
  )
}

export default Sidebar


