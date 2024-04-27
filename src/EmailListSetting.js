import React from 'react'
import './css/EmailList.css'
import { IconButton } from '@mui/material'
import { ArrowDropDown, CheckBoxOutlineBlankOutlined, ChevronLeft, ChevronRight, Expand, Keyboard, MoreVert, Refresh } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function EmailListSetting() {
  return (
    <div className='emaillist_setting'>
        <div className='emaillist_setting_left'>

            <IconButton>
                <CheckBoxOutlineBlankOutlined/>
            </IconButton>
            <IconButton>
                <ArrowDropDown/>
            </IconButton>
            <IconButton>
                <Refresh/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>


        <div className='emaillist_setting_right'>
          <p> 1-50  of 10,222</p>
          <IconButton>
                <ChevronLeft/>
            </IconButton>
            <IconButton>
                <ChevronRight/>
            </IconButton>
            
            <IconButton>
                <Keyboard/>
            </IconButton>
            

            <IconButton>
                  <ExpandMoreIcon/>
                </IconButton>


        </div>


    </div>
  )
}

export default EmailListSetting