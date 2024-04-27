import React from 'react'
import { CheckBoxOutlineBlank } from '@mui/icons-material'
import { StarBorder ,  } from '@mui/icons-material'
import './css/EmailList.css'
import { useHistory, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {openMessage} from './features/mailSlice'


function EmailBody({name,subject,message,email,time}) {

  const navigate = useNavigate();        

  const dispatch = useDispatch();

  const setMail = () => {
    navigate('/mail')
    dispatch(openMessage({
      name,
      subject,
      message,
      email,
      time
    }))

    
  };


  return (
    <div className='emailbody' onClick={setMail}>
        <div className='emailbody_left'> 
        <CheckBoxOutlineBlank/>
        <StarBorder/>
        

        <h4> {name} </h4>
        </div>
        

        <div className='emailbody_middle'> 
        <div className='emailbody_middle_msg'>
            <p><b>{subject} : </b> {message } </p>
        </div>
        </div>

        
        <div className='emailbody_right'> 
        <p>{time}</p>
        </div>
    </div>
  )
}

export default EmailBody