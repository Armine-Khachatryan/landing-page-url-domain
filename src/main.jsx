import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <ToastContainer
          autoClose={3000}
          newestOnTop={true}
          closeOnClick={true}
          draggable={true}
          pauseOnHover={false}
          style={{paddingTop: "80px"}}
      />
  </React.StrictMode>,
)
