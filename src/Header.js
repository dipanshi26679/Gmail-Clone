import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton , Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './css/Header.css';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// https://clone-b7e4a.web.app/
const Header =() => {

    const user = useSelector(selectUser);
    
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton className='icon'>
                <MenuIcon/>
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='logo' />

        </div>
        <div className='header_middle'>
            <div className='search_mail'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type='text' placeholder='Search mail' />
            <IconButton>
                <TuneIcon/>
            </IconButton>
            </div>
            
        </div>


        <div className='header_right'>
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>


            <IconButton>
                <SettingsIcon/>
            </IconButton>


            <IconButton>
                <AppsIcon/>
            </IconButton>

            <Avatar src={user?.photoUrl} onClick={()=> firebase.auth().signOut()}/>
        </div>
    </div>
  )



}

export default Header;  