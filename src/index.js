import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

document.addEventListener('DOMContentLoaded', (event) => {
    var textElements = document.querySelectorAll('text');
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.pointerEvents = 'none';
    }
  });

ReactDOM.render(<App />, document.getElementById("root"));
