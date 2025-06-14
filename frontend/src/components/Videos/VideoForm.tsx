import React, { ChangeEvent, FormEvent, useState } from "react";
import { Video } from "./Video";
import * as videoservice from './VideoService'
import {toast} from 'react-toastify' // para generar la linea 28.
import {useHistory} from 'react-router-dom' // useHistory viene de react-router-dom y permite pushear o cambiar la ventana al realizar una accion, en este caso al crear el video en el form, se genera la notificacion de "video creado" y envia al listado de videos.

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {

  const history = useHistory() // Este history permite cambiar el enrutador. linea 30.

  const initialState = {
    title: "",
    description: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(initialState); // 

  const handleInputChange = (e: InputChange) => {
      setVideo({...video, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await videoservice.createVideo(video);
    toast.success('New video added'); // este "toast" es para enviar un mensaje con estilo de la librerya de "react-toastify"
    setVideo(initialState)
    history.push('/')
  }

// el "row" de la linea 34 esta contenida dentro del "container" en la linea 25 de "index.tsx" por regla de html5
// de esta forma se crea una tarjeta con un formulario dentro que contiene el componente VideoForm en la estructura html.
// Dentro de row tmbn debe haber columnas por regla

  return (
    <div className="row"> 
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this video"
                  className="form-control"
                  autoFocus // para posicionar el cursor en el input cada vez que se entra a la vista del formulario.
                  onChange={handleInputChange}
                  value={video.title}                  
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3} // para el alto (filas) del textarea.
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>

              <button className="btn btn-primary">Create Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
