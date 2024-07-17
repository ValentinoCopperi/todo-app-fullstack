import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className='fixed left-0 top-0 h-screen w-[10%] sm:w-[7%] bg-[#e0dede] shadow-xl border-r border-[#999999]'>
        <div className='flex flex-col items-center pt-12'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#4bd4e3]" : "text-[#4f4f4f]"}>
            <FormatListBulletedIcon className='sidebar-icon'/>
          </NavLink>
          
          
          <NavLink to="/completed" className={({isActive}) => isActive ? "text-[#4bd4e3]" : "text-[#4f4f4f]"}>
            <TaskAltIcon  className='sidebar-icon my-12'/>
          </NavLink>

          <NavLink to="/add" className={({isActive}) => isActive ? "text-[#4bd4e3]" : "text-[#4f4f4f]"}>
            <AddIcon className='sidebar-icon'/>
          </NavLink>

        </div>
    </div>
  )
}
