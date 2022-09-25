
import './App.css';
import video from './videos/sculputre.mp4'

function App() {

 
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>

      <div>
        <video controls src={video}  height={200} width={300} />
      </div>

    </div>
  );
}

export default App;
