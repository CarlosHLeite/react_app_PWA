import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData ] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://orangevalleycaa.org/api/videos");
      const response = await res.json();

      setData(response)
    }

    fetchData()
  }, [])



  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>

      <div>
        { data.map( video => (
          <div key={video.id}>
            <h3>{video.name}</h3>
            <video height={200} width={300} controls src={video.video_url} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
