const Video = ({video}) => {
    
  return (

    <div>

      <div className="video-container">
        {video?(
            <video height="30%" width="30%" src={video} controls autoplay></video>
        ):(<p>video seçmediniz</p>)}
      </div>
    </div>
  );
};
export default Video;
