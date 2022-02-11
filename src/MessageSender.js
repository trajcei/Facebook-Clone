import React, {useState} from 'react';
import "./MessageSender.css"
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender(){
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
        });

        setInput('');
    }
        return(
            <div className="messageSender">

                <div className="MessageSender_Top">
                    <Avatar src={user.photoURL}/>
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Whats on your mind,` + (user.displayName) + `?`}/>
                        <button onClick={handleSubmit} type="submit">Hidden submit</button>
                    </form>
                </div>

                <div className="MessageSender_Bottom">
                    <div className="messageSender_option">
                        <VideocamIcon style={{color: "red"}} />
                        <h3>Live Video</h3>
                    </div>

                    <div className="messageSender_option">
                        <PhotoLibraryIcon style={{color: "green"}} />
                        <h3>Photo/Video</h3>
                    </div>

                    <div className="messageSender_option">
                        <InsertEmotionIcon style={{color: "orange"}} />
                        <h3>Feeling/Activity</h3>
                    </div>

                </div>
            </div>
        );
}

export default MessageSender;