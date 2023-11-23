import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Congrats.scss'


export const Congrats: React.FC = () => {

    return(
        <div className='congrats-container'>
            <div className='body-container'>
                <h1>
                    Congrats on making it to the end!
                </h1>
                <p>
                    This is a blank page
                </p>
            </div>
        </div>
    )
}