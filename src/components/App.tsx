import React from 'react';

const images = [
  { id: 1, src: require('../assets/1.jpg') },
  { id: 2, src: require('../assets/2.jpg') },
  { id: 3, src: require('../assets/3.jpg') },
  { id: 4, src: require('../assets/4.jpg') },
  { id: 5, src: require('../assets/5.jpg') }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {images.map(image => (
            <img src={image.src} />
          ))}
        </a>
      </header>
    </div>
  );
};

export default App;
