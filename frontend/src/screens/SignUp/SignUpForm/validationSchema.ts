import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('uppercase', 'Choose a stronger password', function (value) {
      return /[A-Z]/.test(value)
    })
    .test('lowercase', 'Choose a stronger password', function (value) {
      return /[a-z]/.test(value)
    })
    .test('number', 'Choose a stronger password', function (value) {
      return /\d/.test(value)
    })
    .test('minLength', 'Choose a stronger password', function (value) {
      return value.length >= 8
    }),
  confirmPassword: Yup.string()
    .required('Please re-enter your password')
    .matches(/[A-Z]/, 'Choose a stronger password')
    .matches(/[a-z]/, 'Choose a stronger password')
    .matches(/\d/, 'Choose a stronger password')
    .min(8)

    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})
