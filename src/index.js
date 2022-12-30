import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configStore } from './components/D-store/configStore';


const localStore = configStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={localStore} >
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
