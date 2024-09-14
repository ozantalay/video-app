import Video from "./Video"

const Menü = ({videos,onVideoChange}) => {
    
    const handleChange=(e)=>{
        onVideoChange(e.target.value)
    }
    

  return (
    <div>
         <div className="video-input">
        {videos.map((video)=>(
            <label key={video.id}  >
                <input  type="radio" name="video" value={video.url} onChange={handleChange}/>{video.title}
            </label>
       
        ))}
        </div>
    </div>
  )
}
export default Menü