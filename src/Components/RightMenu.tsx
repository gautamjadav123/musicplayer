import React from 'react'
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from 'react-icons/fa';
import "../Styles/RightMenu.css";
import profile from '../img/profile.jpg'

function RightMenu() {
  return (
    <div className='rightMenu'>
      <div className="goPro">
        <i>
          <FaCrown/>
          <p>
            Go <span>Pro</span>
          </p>
        </i>
        <i>
          <FaBell/>
        </i>
        <i>
          <FaRegHeart/>
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun/>
        </i>
        <i>
        <FaCogs/>
        </i>
        <div className="profileImage">
          <img src={profile} alt="Profileimg" />
        </div>
      </div>
    </div>
  )
}

export {RightMenu};