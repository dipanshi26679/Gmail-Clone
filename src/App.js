import React, { useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import EmailList from './EmailList';
import Compose from './Compose';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import MailDetail from './MailDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Login';
import { selectUser, signIn, signOut } from './features/userSlice'
import { auth } from './firebase';






function App() {


  const dispatch = useDispatch();


  const isMessageOpen = useSelector(selectSendMessageIsOpen);



  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email
        }))
      }
      else {
        dispatch(signOut())
      }
    })
  }, [])


  return (
    <Router>
      {
        user && (<div className="App" >
          <Header />
          <div className='App_body'>
            <SideBar />
            <Routes>
              <Route exact path="/" element={<EmailList />} />

              <Route path='/mail' element={<MailDetail />} />


            </Routes>


          </div>
          {
            isMessageOpen && <Compose />
          }

        </div>
        )}   {(
          <Login />
        )
      }
    </Router>
  );
}

export default App;
