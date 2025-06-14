import React, { useEffect, useState } from 'react'
import { Video } from './Video'
import  * as videoService from './VideoService' // O tmbn {getVideos, ..., ..., etc} para cada funcion
import VideoItem from './VideoItem'

const VideoList = () => {

    const [videos, setvideos] = useState<Video[]>([]) // useState define un stado dentro del componente...

    const loadVideos = async () => {
        const res = await videoService.getVideos() // Esta funcion llama al archivo VideoService.ts que se crea para guardar las configuraciones que hacen peticiones al Backend (api).

        const formatedVideos = res.data.map(video => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
            }
        })
        .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())

        setvideos(formatedVideos);
    }

    useEffect(() => { // useEffect es una funcion que da React, o un hub que permite ejecutar cierta porcion de codigo cuando carga el componente. Es una funcion que tiene una funcion dentro para declarar el bloque de codigo que queremos ejecutar y un arreglo para decirle dependiendo de que variable queremos ejecutar esa porcion de codigo.
        loadVideos() // Entonces esta funcion esta ejecutando primero una peticion a la api para la carga de los videos guardados en la bbdd.
    }, [])

    return (
        <div className="row">
            {videos.map((video) => {
               return <VideoItem video={video} key={video._id}/>
            })}
        </div>
    )
}

export default VideoList
