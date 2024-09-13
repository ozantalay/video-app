const App = () => {
  return (
    <div className="App">
      <div className="video-container">
        <h1>Project 6 video Player</h1>

        <div className="video-input">
          <input type="radio" />
          geyik
          <input type="radio" />
          salyangoz
          <input type="radio" />
          örümcek
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x7OkPF8H-Ig"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default App;
