import React from 'react';
import {GiphyEmbed} from './GiphyEmbed'; 

export const Congrats: React.FC = () => {
    return (
            <div className='congrats-message'>
                <h1>Enjoy the holiday season!</h1>
                <GiphyEmbed />
            </div>
    )
};
