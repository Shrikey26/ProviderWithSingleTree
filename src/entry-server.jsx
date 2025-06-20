import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
 const html = renderToString(<App />);
  console.log('SSR HTML:', html); 
  return html;
}