import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { verifyEmail } from 'utils/verifyEmailController'

export default function EmailInput({ hasAccount, setHasAccount, children }) {
  return (
    <Field name='email'>
      {({ field, form }: FieldProps) => (
        <FormControl
          mb={5}
          isInvalid={!!(form.errors.inputName && form.touched.inputName)}
        >
          <FormLabel htmlFor='email' fontWeight={'normal'} m={0}>
            {children}
          </FormLabel>
          <Input
            {...field}
            id='email'
            name='email'
            bg={'#ECEBEB'}
            onFocus={() => form.setFieldTouched('email')}
            onBlur={async e => {
              return (await verifyEmail(e.target.value))
                ? setHasAccount(false)
                : setHasAccount(true)
              // return savedUsers.some(user => user.email === e.target.value)
              //   ? form.setFieldError('email', 'Email already in use')
              //   : null
            }}
          />
          <Text color={'red'}>
            <ErrorMessage name='email' />
          </Text>
          {hasAccount && form.touched.email && (
            <Text color={'red'}>Email already in use</Text>
          )}
        </FormControl>
      )}
    </Field>
  )
}
