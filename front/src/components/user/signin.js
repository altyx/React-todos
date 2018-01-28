import React from "react";
import './user.css';

const signin = () => {
    return (
        <div className="user">
            <form className="user">
                <input type='text' placeholder="nom" />
                <input type='text' placeholder="prenom"/>
                <input type='email' placeholder="email" />
                <input type='password' placeholder="mot de passe"/>
                <input type="submit" className="submit" value="inscription" />
            </form >

        </div>
    );
};

export default signin;