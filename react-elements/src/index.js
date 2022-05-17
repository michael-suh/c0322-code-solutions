import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement('h1', null, 'Hello, React!');
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(reactElement);
