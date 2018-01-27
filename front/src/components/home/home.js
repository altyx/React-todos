import React from "react";
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <p>Bienvenue sur la TODO app made by React ! </p>
            <p>Commencez par <Link to='/add'>ajouter des tâches</Link> à votre liste</p>
        </div>
    );
};

export default home;