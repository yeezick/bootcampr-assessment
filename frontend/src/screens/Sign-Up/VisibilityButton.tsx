import React from 'react'
import './SignUp.scss'
import { Icon } from 'react-icons-kit';

interface VisibilityButtonProps {
    onClick: (event: any) => void;
    icon: string;
}

export const VisibilityButton: React.FC<VisibilityButtonProps> = ({ onClick, icon }) => {
    return (
        <button className='visibility-button'>
            <span className='visiblity-icon' onClick={onClick}>
                <Icon className='absolute mr-10' icon={icon} />
            </span>
        </button>
    )
}