import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sobre from '../src/componentes/Sobre.jsx';
import Home from './componentes/Home.jsx';
import Contato from './componentes/Contato.jsx';
import Lista from './componentes/Lista.jsx';
import Login from '../src/componentes/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home/> },
      { path: '/Sobre', element: <Sobre/> },
      { path: '/Contato', element: <Contato/> },
      { path: '/Lista', element: <Lista/> },
      { path: '/Login', element: <Login/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
