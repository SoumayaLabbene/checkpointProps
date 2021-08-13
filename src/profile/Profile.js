import React from "react";
import PropTypes from "prop-types";

const styleObject={color:"#A34B73",textAlign: "center"};
const styleObject1={textAlign: "center"};

const Profile = props => {
    return (
        <div style={{marginTop:"100px"}}>
        <div style={styleObject1}>{props.children}</div>
        <h1 style={styleObject}>{props.fullName} </h1>
        <p style={styleObject1}>{props.bio}</p>
            <p style={styleObject1}>{props.profession}</p>
            <br></br>
            <div style={{ textAlign:"center"}}>
        <button onClick={() => props.handleName(props.fullName)}  style={{backgroundColor:"#A34B73",  border: "none",   color: "white",  fontSize: "16px", width:"100px",height:"40px"}}>My name</button>
        </div>
        </div>
    )
};
Profile.defaultProps = {
    fullName: "Sara",
    bio: "24, engineer",
    profession: "Electrical engineer",
};
Profile.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
   export default Profile;