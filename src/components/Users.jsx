import React from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../data/data_user'; 

const Users = () => {
    const params = useParams();
    const user = getUser(parseInt(params.id)); 

    if (!user) {
        return <div>No se encontró el usuario con ID {params.id}</div>; 
    }

    return (
        <div>
            <h1>Perfil de usuario</h1>
            <h2>{user.first}  {user.last}</h2>
            <img src={user.image} alt={user.first} width="150px" /> 
            <p>{user.email}</p>
        </div>
    );
};

export default Users;
