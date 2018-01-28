import  React  from "react";
import { Link } from "react-router-dom";
import './user.css';

const login = () => {
    return (
        <div className="user">
            <input type='text' />
            <input type='password' />
            <input type="submit" className="submit" value="connexion" />
            <p>Pas de compte ? <Link to='/signin'>Par ici.</Link></p>
        </div>
    );
};

export default login;