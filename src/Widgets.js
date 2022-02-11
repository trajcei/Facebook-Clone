import React from 'react';
import "./Widgets.css";
import Logo from "./download.png"
import Logo1 from "./present.png"
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

function Widgets(){
        return (
            <div className="widgets">
                <div className="widget_top">
                    <p>Sponsored</p>
                    <img src={Logo}></img>
                    <text>Learn ReactJS Today!</text>
                </div>
                <div className="widget_mid">
                    <p>Birthdays</p>
                    <img src={Logo1}></img><text>     React have a birthday today!</text>
                </div>
                <div className="widget_bot">
                    <p>Contacts</p>
                </div>

            </div>
        );
}

export default Widgets;