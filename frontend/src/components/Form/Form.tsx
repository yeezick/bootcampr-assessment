import FormControl from '@mui/material/FormControl'
import './Form.scss'

export const Form: React.FC = () => {
  return (
    <form className='form'>
      <label htmlFor='firstName'>First name</label>
      <input
        type='text'
        id='firstName'
        className='form__input
        '
      />
      <label htmlFor='lastName'>Last name</label>
      <input
        type='text'
        id='lastName'
        className='form__input
        '
      />
      <label htmlFor='email'>
        {' '}
        Email address{' '}
        <span className='label--gray'> &#40;ex. jeanine@bootcampr.io&#41;</span>
      </label>
      <input
        type='text'
        id='email'
        className='form__input
        '
      />
      <label htmlFor='password'>Re-enter password</label>
      <input
        type='text'
        id='password'
        className='form__input
        '
      />
      <div className='form__checkbox'>
        <input
          type='checkbox'
          id='rePassword'
          className='form__input
        '
        />
        <p>
          I agree to receive email notification(s). We will only send emails
          with important information, like project start dates. We will not sell
          your information!
        </p>
      </div>
      <button type='submit' className='form__submit'>
        Sign up
      </button>
    </form>
  )
}
