import React from "react";
import defaultLogo from "../Resources/Images/defaultLogo.png";
import { useMatch, useNavigate } from "react-router-dom";

function ProfileCard(props) {
  const match = useMatch("/profile/:profileName");
  const Navigator = useNavigate();

  return (
    <div>
      <div id="profileContainer" className="ProfilePageContainer">
        <div id="imageFrame">
          <img
            src={props.logoImage ? props.logoImage : defaultLogo}
            id="imageLogo"
            alt="Profile"
            onClick={() => {
              if (!match) {
                Navigator(`/profile/${props.username}`);
              }
            }}
          />
        </div>
        <div id="profileRightSide">
          <label
            id="profileName"
            onClick={() => {
              if (!match) {
                Navigator(`/profile/${props.username}`);
              }
            }}
          >
            {props.username}
          </label>
          <label
            id="ProfileDescription"
            onClick={() => {
              if (!match) {
                Navigator(`/profile/${props.username}`);
              }
            }}
          >
            {props.description}
          </label>
          <button
            id="messageBtn"
            onClick={() => Navigator(`/chat/${props.username}`)}
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
