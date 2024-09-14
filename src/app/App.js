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
        {videoId:1,url:'https://videos.pexels.com/video-files/854942/854942-hd_1920_1080_25fps.mp4',title:'salyangoz',icon:'🐌'},
        {videoId:2,url:'https://videos.pexels.com/video-files/854982/854982-hd_1280_720_25fps.mp4',title:'kedi',icon:'🐈'},
        {videoId:3,url:'https://videos.pexels.com/video-files/3195531/3195531-uhd_2560_1440_25fps.mp4',title:'geyik',icon:'🦌'},
        {videoId:4,url:'https://videos.pexels.com/video-files/855643/855643-hd_1920_1080_25fps.mp4',title:'örümcek',icon:'🕷️'}
    ]
  return (
      
      <div className="min-h-screen flex flex-col justify-center items-center ">

        <h1 className="mt-0">Project 6 video Player</h1>

     <Menü  videoSelect={videoSelect} videos={videos} onVideoChange={handleChange}/>
     <Video video={videoSelect}/>
        </div>
  );
};
export default App;
