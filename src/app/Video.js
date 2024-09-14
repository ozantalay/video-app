const Video = ({video}) => {
    
  return (

    <div className="p-4 bg-white rounded-lg shadow-md max-w-3xl  mt-10 transform transition-transform duration-300 ease-in-out hover:scale-105">

      <div  >
        {video?(
            <video height="30%" width="30%" src={video} controls autoPlay className="w-full h-auto rounded-lg"></video>
        ):(<p p className="mt-4 text-gray-500 text-xl">video seçmediniz</p>)}
      </div>
    </div>
  );
};
export default Video;
