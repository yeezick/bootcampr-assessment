import React, { useState } from 'react'
import Confetti from 'react-confetti'
import './SuccessPage.scss'

export const SuccessPage: React.FC = () => {

    return (
        <div className='success-page'>
        <Confetti />
        <div className='content'>
            <svg width="400" height="400">
            <circle
                fill="none"
                stroke="#68E534"
                stroke-width="20"
                cx="200"
                cy="200"
                r="190"
                strokeLinecap="round"
                transform="rotate(-90 200 200)"
                className="circle"
            />
            <polyline
                fill="none"
                stroke="#68E534"
                points="88,214 173,284 304,138"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tick"
            />
            </svg>
            <center>
                <h1>Congratulations!</h1>
                <p>You are now registered.</p>
            </center>
        </div>
        </div>
    )
}