import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './pages/Main';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);