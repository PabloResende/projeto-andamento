import React from 'react';
import './style.css'

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    const handleClick = () => {};

    return (
        <button onClick={handleClick} className='RegistrationProcessButton'>
            {title}
        </button>
    );
}

