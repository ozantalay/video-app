'use client'
import { useState } from "react";
import Video from "./Video";
import Menü from "./Menü";

const App = () => {
    const [videoSelect,setVideoSelect]=useState('')

    const  handleChange=(video)=>{
        setVideoSelect(video)
    }
    const videos=[
        {videoId:1,url:'https://videos.pexels.com/video-files/854942/854942-hd_1920_1080_25fps.mp4',title:'salyangoz'},
        {videoId:2,url:'https://videos.pexels.com/video-files/854982/854982-hd_1280_720_25fps.mp4',title:'kedi'},
        {videoId:3,url:'https://videos.pexels.com/video-files/3195531/3195531-uhd_2560_1440_25fps.mp4',title:'geyik'},
        {videoId:4,url:'https://videos.pexels.com/video-files/855643/855643-hd_1920_1080_25fps.mp4',title:'örümcek'}
    ]
  return (
    <div className="App">

        
        <h1>Project 6 video Player</h1>

     <Menü  videoSelect={videoSelect} videos={videos} onVideoChange={handleChange}/>
     <Video video={videoSelect}/>
    </div>
  );
};
export default App;
