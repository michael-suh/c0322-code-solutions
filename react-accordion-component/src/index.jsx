import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: '1',
    tab: 'Mercedes-Benz',
    content: 'We will inspire and create an exceptional place to work and to do business. One employee, one customer, one vehicle at a time.'
  },
  {
    id: '2',
    tab: 'BMW',
    content: 'We will become the world\'s leading provider of premium products and premium services for individual mobility.'
  },
  {
    id: '3',
    tab: 'Audi',
    content: 'We delight customers worldwide'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <Accordion data={topics} />
);
