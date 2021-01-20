import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { onUpdate, forceUpdate } from './state';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


onUpdate((state) => {
  ReactDOM.render(
    <App contactList={state.contactList} />,
    document.getElementById('root')
  );
})

forceUpdate();

registerServiceWorker();
