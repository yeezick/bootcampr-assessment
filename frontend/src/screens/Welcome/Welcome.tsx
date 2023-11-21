import { FC } from 'react'
import './Welcome.scss'

export const Welcome: FC = () => {
  return (
    <div className='welcome-container'>
      <h1>Congrats on making it to the end!</h1>
      <p>This is a welcome page!</p>
    </div>
  )
}
