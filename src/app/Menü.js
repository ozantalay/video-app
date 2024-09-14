import Video from "./Video";

const Menü = ({ videos, onVideoChange }) => {

    const handleChange = (e) => {
        onVideoChange(e.target.value);
    }

    return (
        <div className="p-1 bg-gray-100 rounded-lg shadow-md max-w-full mx-auto mt-20">
            <div className="flex overflow-x-auto space-x-2">
                {videos.map((video) => (
                    <label 
                        key={video.id} 
                        className="flex-shrink-0 flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 ease-in-out"
                    >
                        <input 
                            type="radio" 
                            name="video" 
                            value={video.url} 
                            onChange={handleChange} 
                            className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <div className="flex-grow flex items-center space-x-3">
                            <span className="text-gray-700 font-medium">{video.title}</span>
                            <span className="text-2xl">{video.icon}</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Menü;
