import React, {useEffect, useState} from 'react';
import axios from "axios";

export function UsersPage() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function getUsers(){
            const response = await axios.get(url);
            setUsers(response.data);
        }
        getUsers()
    }, []);



    return (
        <div>
            <h2>Users page</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}: {user.email}, {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

