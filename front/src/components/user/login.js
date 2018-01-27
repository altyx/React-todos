import  React  from "react";
import { Link } from "react-router-dom";

const login = () => {
    return (
        <div>
            <input type='text' />
            <input type='password' />

            <Link to='/signin'>Inscription</Link>
        </div>
    );
};

export default login;