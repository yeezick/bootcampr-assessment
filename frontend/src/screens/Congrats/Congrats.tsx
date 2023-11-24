import React from 'react'
import Linkedin from 'assets/linkedin.png'
import Github from 'assets/github.png'
import "./Congrats.scss"

export const Congrats = () => {
    return (
        <div className='congrats-container'>
            <h1>Congrats on making it to the End!</h1>
            <h2>My name is Madhav Asok! Feel free to checkout my linkedin and github!</h2>

            <div className='image-container'>
                <a href="https://www.linkedin.com/in/madhav-asok/"><img src={Linkedin} /></a>
                <a href="https://github.com/mdhvsk"><img src={Github} /></a>

            </div>
        </div>
    )
}
