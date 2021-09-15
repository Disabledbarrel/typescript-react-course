import { useState } from "react";

const GuestList: React.FC = () => {
    // State
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName(''); // Empty input field
        setGuests([...guests, name]); // spredoperator to not always override exisiting array
    }
    return (
        <div>
            <h1>Guest list</h1>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Add guest</button>
        </div>
    )
}

export default GuestList;