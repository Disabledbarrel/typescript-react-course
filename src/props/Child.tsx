interface ChildProps {
    color: string;
    onClick: () => void;
}

// Nedan sätt så förstår inte TS att det är en React-komponent
export const Child = ({ color, onClick }: ChildProps) => {
    return (
    <div>
        Hello {color}
        <button onClick={onClick}>Click me</button>
    </div>
    ) 
}

// 
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            Hello {color}
            Hejdan {children}
            <button onClick={onClick}>Click me</button>
        </div>
        ) 
}