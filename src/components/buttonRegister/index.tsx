import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
}

