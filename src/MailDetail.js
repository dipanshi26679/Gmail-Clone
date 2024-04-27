import React from 'react'
import './css/EmailList.css'
import { Avatar, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import { LabelImportant, Launch, MoreVert, Print } from '@mui/icons-material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { ChevronLeft, ChevronRight, Keyboard } from "@mui/icons-material"
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectedMail } from './features/mailSlice';



//                                        



function MailDetail() {
    const navigate = useNavigate();

    const mail = useSelector(selectedMail);


    console.log(mail);
    return (
        <div className='emailDetails'>
            <div className='emaillist_body'>
                <div className='emaillist_left'>
                    <IconButton>

                        <ArrowBackIcon onClick={() => navigate('/')} />
                    </IconButton>
                    <IconButton>
                        <ArchiveOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ReportGmailerrorredIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <AccessTimeIcon />
                    </IconButton>
                    <IconButton>
                        <MarkEmailUnreadOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AddTaskOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <DriveFileMoveOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <LabelOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>


                <div className='emaillist_right'>

                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>

                    <IconButton>
                        <Keyboard />
                    </IconButton>



                </div>


            </div>

            <div className='email_header'>
                <div className='emil_header_left'>
                    <h4>Subject:  {mail.subject}</h4>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>

                </div>

                <div className='email_header_right'>
                    <p>{mail.time}</p>
                    <IconButton >
                        <Print />
                    </IconButton>
                    <IconButton>
                        <Launch />
                    </IconButton>

                </div>

            </div>


            <div className='emailDetail_middleheader'>
                <div className='emailDetail_middleheaderLeft'>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                    <h4>{mail.name}  </h4>
                    <p>  {mail.email}
                    </p>



                </div>


                <div className='emailDetail_middleheaderRight'>
                    <IconButton>
                        <StarBorderPurple500OutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ReplyOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='message_body' >
                <p>{mail.message}</p>
            </div>

        </div>
    )
}

export default MailDetail
