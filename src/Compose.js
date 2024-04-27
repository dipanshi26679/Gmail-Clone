import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { IconButton } from '@mui/material';
import './css/compose.css';
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMsg } from './features/mailSlice';
import { db } from './firebase';                   
import { selectUser } from './features/userSlice';
                                                 
                                                   
                                                
                                                
function Compose() {


   

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setmessage] = useState("");



    const dispatch = useDispatch(closeSendMsg);

    const user = useSelector(selectUser)
    const formSubmit =(e)=> {
        e.preventDefault();
        if(to=== ""){
            return alert("To is Required ")
        }
        if(subject=== ""){
            return alert("Subject is Required ")
        }
        if(message=== ""){
            return alert("Message is Required ")
        }

       db.collection("email").add({
            to,
            message,
            subject,
            from:user.email,
            fromName:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        setTo("");
        setSubject("");
        setmessage("");

        alert("Email  sent Successfull");
        
        dispatch(closeSendMsg());
        
        
    }  

    return (
        
        <div className='compose'>
            <div className='compose_header'>
                <div className='compose_header_left'>
                    <span>New Message</span>
                </div>
                <div className='compose_header_right'>
                    <IconButton>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInFullOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(closeSendMsg())} >
                        <CloseOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div>
                <form onSubmit={formSubmit}>
                <div className='compose_body'>

                    <div className='Compose_body_form'>
                        <input type='email' placeholder='Recipients' value={to} onChange={(e) => setTo(e.target.value)} />
                        <input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea rows='20' value={message}  onChange={(e) => setmessage(e.target.value)} />
                    </div>

                </div>

                <div className='compose_footer'>
                    <div className='compose_footer_left'>
                        <button> Send  <ArrowDropDownOutlinedIcon /> </button>
                    </div>
                    <div className='compose_footer_bottom' >
                        <IconButton>
                            <FormatColorTextOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AttachFileOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <InsertLinkOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <EmojiEmotionsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AddToDriveOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <InsertPhotoOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <LockClockOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <ModeEditOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='compose_footer_right'>
                        <IconButton>
                            <DeleteForeverOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                </form>


            </div>
        </div>
    )
}

export default Compose;




