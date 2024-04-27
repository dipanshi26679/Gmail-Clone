import React, { useEffect, useState } from 'react'
import './css/EmailList.css'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailBody from './EmailBody'
import {db} from './firebase'


function EmailList() {


  const [email, setEmail] = useState([]);

  useEffect(()=>{
    db.collection("email").orderBy("timestamp","desc").onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  })


  return (
    <div className='emaillist'>
        <EmailListSetting/>
        <EmailType/>
        {email.map(({id,data}) => {
          return <EmailBody key={id} name={data.fromName}  subject={data.subject}  message={data.message}   email={data.from}  time = { new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>

        })}                                        

        

    </div>
  )
}


export default EmailList