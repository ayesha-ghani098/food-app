import React from "react";
import { useSelector } from "react-redux";

// Style and Assets
import "./style.css";
import temporary from "../../assets/avatar.png";

// Styled Components
import Offcanvas from "react-bootstrap/Offcanvas";

// Components
import BasicHeading from "../Heading/Heading";

const ProfileCanvas = (props) => {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  return (
    <Offcanvas
      id="profilecanvas"
      show={props.show}
      onHide={props.hide}
      placement="end"
      {...props}
    >
      <BasicHeading heading="Your Profile" />
      <div className="profile__avatarContainer">
        <img src={temporary} alt="Avatar" />
        <div>
          <h2>{user.username}</h2>
          <h5 className="h5">
            UserId: <span className="span">{user.id}</span>
          </h5>
        </div>
      </div>
      <div>
        <h5 className="h5">
          Number: <span className="span">{user.number}</span>
        </h5>
        <h5 className="h5">
          Email: <span className="span">{user.email}</span>
        </h5>
        <h5 className="h5">
          Address: <span className="span">{user.address}</span>
        </h5>
      </div>
    </Offcanvas>
  );
};

export default ProfileCanvas;
