import React from 'react';
import Story from "./Story";
import "./StoryReel.css"
import {useStateValue} from "./StateProvider";
import {Avatar} from "@material-ui/core";

function StoryReel(){
        const [{user}, dispatch] = useStateValue();

        return (
            <div className="StoryReel">
                <Story profileSrc={user.photoURL}
                title={user.displayName}
                image="https://www.lollydaskal.com/wp-content/uploads/2013/09/Screen-shot-2013-09-28-at-6.49.28-PM.png"
                />
                <Story
                    title="DeepF"
                    image="https://i1.sndcdn.com/artworks-kKAOZCDogm55b71g-lLPydg-t500x500.jpg"
                />
                <Story
                    title="Coder"
                    image="https://st2.depositphotos.com/1203257/8043/i/600/depositphotos_80434210-stock-photo-website-coding.jpg"
                />
                <Story
                    title="WeeGo"
                    image="https://sweetiq.com/wp-content/uploads/2016/11/iStock_97467073_LARGE.jpg"
                />
                <Story
                    title="bey0nd"
                    image="https://hudsonvalleyone.com/wp-content/uploads/2021/12/48-nightsky.jpg"
                />

            </div>
        );
}

export default StoryReel;