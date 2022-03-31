// import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App';

// v. 18.0
// const container = document.getElementById('root');
// const root = ReactDOMClient.createRoot(container);

// root.render(<App />);

// v. 17.0
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);