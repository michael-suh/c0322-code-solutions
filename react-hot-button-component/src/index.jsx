import React from 'react';
import ReactDOM from 'react-dom/client';
import HotButton from './hot-button';

const element = <HotButton />;
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(element);
