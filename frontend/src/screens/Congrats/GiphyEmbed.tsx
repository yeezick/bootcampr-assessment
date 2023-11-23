import React from 'react';
import './Congrats.scss'


export const GiphyEmbed: React.FC = () => {
    return (
        <div>
            <iframe
                title='Christmas'
                src="https://giphy.com/embed/wPn31WOCzkvKg"
                width="480"
                height="360"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
            <p>
                <a href="https://giphy.com/gifs/christmas-holiday-wPn31WOCzkvKg">via GIPHY</a>
            </p>
        </div>
    );
};
