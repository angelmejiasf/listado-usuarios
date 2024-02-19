import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { getUsers } from '../data/data_user';

const ListOfUsers = () => {
    const users = getUsers();

    return (
        <section>
            <h1>Usuarios</h1>
            <section>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.first}</Link>
                        </li>
                    ))}
                </ul>
            </section>
            <Outlet></Outlet>
        </section>
    );
};

export default ListOfUsers;
