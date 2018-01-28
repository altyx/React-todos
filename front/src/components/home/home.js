import React from "react";
import { Link } from 'react-router-dom';
import './home.css';

const home = () => {
    return (
        <div className="home" >
            <p>Bienvenue sur la TODO app made by React ! </p>
            <p>Commencez par ajouter des tâches à votre liste <Link to='/add'>en cliquant ici.</Link></p>
        </div>
    );
};

export default home;