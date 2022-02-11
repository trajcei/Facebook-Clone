import React from 'react';
import { Button } from "@material-ui/core"
import "./login.css"
import { auth, provider } from "./firebase";
import { actionTypes} from "./reducer";
import { useStateValue} from "./StateProvider";

function Login(){
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        //sign
        auth
            .signInWithPopup(provider)
            .then(result=>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch(error => alert(error.msg));
    };
        return (
            <div className="login">
                <div className="login_logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
                </div>
                <Button type="submit" onClick={signIn}>Sign in</Button>
            </div>
        );
}

export default Login;