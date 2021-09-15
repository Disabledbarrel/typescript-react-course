import { useState } from "react";

// Hardcoded example users
const users = [
    { name: 'Elin', age: 36 },
    { name: 'Kristian', age: 33},
    { name: 'Alma', age: 1}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number} | undefined>();

    const onClick = () => {
        setName('');
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        
        setUser(foundUser);
    }

    return (
        <div>
            <h1>User Search</h1>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Find user</button>
            <h2>Found User</h2>
            <div>
                {user && <p>Name: {user.name}</p>}
                {user && <p>Age: {user.age}</p>}
                {!user && <p>No user found</p>}
            </div>
        </div>
    );
}

export default UserSearch;