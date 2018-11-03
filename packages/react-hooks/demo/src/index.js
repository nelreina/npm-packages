import React from 'react';
import { render } from 'react-dom';
import './style.css';
import SimpleUseFetch from './SimpleUseFetch';

const Demo = () => {
  return (
    <div className="container">
      <h1>@nelreina/react-hooks Demo</h1>
      <p>Just Library with some custom React Hooks</p>

      <SimpleUseFetch />
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
