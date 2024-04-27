import React from 'react'
import { Button, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import "./css/SideBar.css"
import SideBarOptions from './SideBarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openSendMsg } from './features/mailSlice';





function SideBar() {


  
const dispatch = useDispatch();



  return (
    <div  className='sidebar'>
      <Button startIcon={<EditIcon/>}  className="compose_btn" onClick={()=> dispatch(openSendMsg())} >COMPOSE</Button>

      <SideBarOptions Icon={InboxIcon}   title="Inbox"  isactive = {true} number="224" />
      <SideBarOptions Icon={StarPurple500Icon}   title="Starred" />
      <SideBarOptions Icon={AccessTimeIcon}   title="Snoozed" />
      <SideBarOptions Icon={SendIcon}   title="Sent" />
      <SideBarOptions Icon={InsertDriveFileIcon}   title="Drafts" />
      <SideBarOptions Icon={KeyboardArrowDownIcon}   title="More" />    

      

      <div className='labels'>
      <h3 className='sidebarOptions_heading'>
        Labels

      </h3>
      <IconButton>
      <AddIcon/> 
      </IconButton>
      
      </div>

      
    </div>


  )
}

export default SideBar