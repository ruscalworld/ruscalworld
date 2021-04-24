import React from "react";
import './style/app.sass';
import BackgroundImage from './images/background.jpg';

function App() {
  return (
    <div>
      <img src={ BackgroundImage } alt="" className="background-image" />
    </div>
  );
}

export default App;
