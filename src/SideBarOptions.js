import React from 'react'
import "./css/sideBarOptions.css"



function SideBarOptions({Icon,title,number , isactive}) {
  return (
    <div className={`sidebar_options ${isactive && 'sidebar_options--active'}`}>
        <Icon/>
        <h2>{title}</h2>
        <p> {number}</p>
    </div>
  )
}

export default SideBarOptions