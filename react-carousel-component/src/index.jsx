import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    image: '../images/001.png'
  },
  {
    id: 2,
    image: '../images/002.png'
  },
  {
    id: 3,
    image: '../images/003.png'
  },
  {
    id: 4,
    image: '../images/004.png'
  },
  {
    id: 5,
    image: '../images/005.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <Carousel data={images} />
);
