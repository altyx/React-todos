import React from 'react';
import {Link} from 'react-router-dom';


const menu = (props) => {
    return (
        <div>
            <Link to='/'>Accueil</Link>
            <Link to='/login'>Login</Link>
            <Link to='/tasks'>Mes tâches</Link>
            <Link to='/about'>A propos</Link>
        </div>
    );
};


export default menu;