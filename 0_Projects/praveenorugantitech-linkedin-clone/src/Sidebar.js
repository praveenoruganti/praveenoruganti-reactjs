import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
             <div className="sidebar__top">
                 <img src="https://avatars0.githubusercontent.com/u/67849221?s=460&u=998b69c041ba5a56c8c4cfa02254921c7c3c53bf&v=4" alt="" />
                 <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                 </Avatar>
                 <h2>{user.displayName}</h2>
                 <h4>{user.email}</h4>
             </div>

             <div className="sidebar__stats">
                 <div className="sidebar__stat">
                     <p>Who viewed you</p>
                     <p className="sidebar__statNumber">1,00,000</p>
                 </div>
                 <div className="sidebar__stat">
                     <p>Views on post</p>
                     <p className="sidebar__statNumber">90,000</p>
                 </div>
             </div>

             <div className="sidebar__bottom">
                 <p>Recent</p>
                 {recentItem("java")}
                 {recentItem("reactjs")}
                 {recentItem("praveenoruganti")}                 
                 {recentItem("javascript")}
                 {recentItem("springboot")}
                 {recentItem("apigee")}
             </div>
        </div>
    )
}

export default Sidebar;
