import React from "react";

const signin = () => {
    return (
        <div>
            <input type='text' placeholder="nom" />
            <input type='text' placeholder="prenom"/>
            <input type='email' placeholder="email" />
            <input type='password' placeholder="mot de passe"/>
        </div>
    );
};

export default signin;