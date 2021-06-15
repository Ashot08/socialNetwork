import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileStatus} from "./ProfileStatus";
import React from "react";


const Profile = (props) => {
    let changePostText = (e) => {
        props.changePostText(e.target.value);
    }
    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.profile}>
            <div>
                <div>
                    <div>
                        <h3>{props.state.profile.fullName}</h3>
                    </div>
                    <div>
                        <div>Обо мне:</div>
                        <div>{props.state.profile.aboutMe}</div>
                    </div>
                    <img src={props.state.profile.photos.small} alt="avatar"/>
                    <ProfileStatus userId={props.state.profile.userId} myId={props.myId} setStatus={props.setStatus}/>
                </div>
            </div>
            <div>
                <p>
                    <textarea onChange={changePostText} className="addPostInput" type="text"
                              value={props.state.postText}/>
                </p>
                <p>
                    <input onClick={addPost} className="addPostButton" type="submit"/>
                </p>
            </div>
            <MyPosts state={props.state}/>
        </div>
    );
}

export default Profile;
