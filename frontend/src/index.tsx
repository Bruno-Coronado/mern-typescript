// https://www.youtube.com/watch?v=_RZ-T6TxP7w Backend

// https://www.youtube.com/watch?v=wOLo-B7mrZM&t=3970s Frontend

import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify'
// "react-toastify" es una libreria de React para enviar mensajes en el frontend. en este caso para confirmar de que un video generado en VideoForm "fue creado".
// Esta libreria se instala por medio del comando "npm i react-toastify" (en el fontend, no api)
// Para usar toastify primero usamnos el componente "<ToastContainer />" y lo pegamos donde queremos usarlo e importamos la libreria (lineas 35 y 5).
// Tambien hay que importar sus estilos por medio de import 'react-toastify/dist/ReactToastify.css' (linea 20)


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/pulse/bootstrap.min.css'
import './index.css';

// Linea 26 componente Navbar fuera del switch para aparecer en todas las vistas
// El p-4 de la className en la linea 25 crea un padding entre el componente que contiene a VideoList y VideoForm con el Navbar.
// Este padding de 4 es una clase de boostrap.
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> 
      
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
