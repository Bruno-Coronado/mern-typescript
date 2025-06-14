import React from 'react'
import {Link} from 'react-router-dom'

// Navegacion desde getboostrap (navbar). Tmbn se uso un convertidor de codigo de html a jsx (magic.reactjs.net) ya que el navegador de de getboostrap usa class y nuestro componente usa classname.
// Tambien se cambiaron las etiquetas "a" originales por las etiquetas "Link" importando el componente "Link" de react-router-dom, además de cambiar el "href" por "to"
// La razon es que la etiqueta href siempre intenta interacutar con el BNackend o redireccionar, en cambio la etiqueta "link" va a usar el enrutador interno de la applicación.
// min 31 de video tutorial

// ms-auto en el className linea 20 mueve el li a la derecha
// el container linea 15 permite que le del a la navegacion espaciado en los lados y centre las listas

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container"> 
                <Link className="navbar-brand" to="/">My Favorite Videos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/new-video">Create new video</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
