import { Inbox } from '@mui/icons-material'
import React from 'react'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import './css/EmailList.css'



function EmailType() {
  return (
    <div className='emailtype'>


        <div className='emailtype_options  emailtype_options--active'>
            <Inbox/>
            <p>Primary</p>
        </div>


        <div className='emailtype_options'>
            <LocalOfferOutlinedIcon/>
            <p>Promotions</p>
        </div>


        <div className='emailtype_options'>
            <GroupOutlinedIcon/>
            <p>Social</p>
        </div>


    </div>
  )
}

export default EmailType