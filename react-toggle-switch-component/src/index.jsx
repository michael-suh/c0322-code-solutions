import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

const element = <ToggleSwitch label="Toggleswitch" />;
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(element);
