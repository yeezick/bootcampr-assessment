import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, FieldProps } from 'formik'
// import { useUsers } from 'hooks/useUser'
import { verifyEmail } from 'utils/verifyEmailController'

export default function SimpleInput({ inputName, children }) {
  // const [savedUsers] = useUsers()

  return (
    <Field name={inputName}>
      {({ field, form }: FieldProps) => (
        <FormControl
          mb={5}
          isInvalid={!!(form.errors.inputName && form.touched.inputName)}
        >
          <FormLabel htmlFor={inputName} fontWeight={'normal'} m={0}>
            {children}
          </FormLabel>
          <Input
            {...field}
            id={inputName}
            name={inputName}
            bg={'#ECEBEB'}
            onFocus={() => form.setFieldTouched(inputName)}
            onBlur={async e => {
              if (field.name === 'email') {
                return (await verifyEmail(e.target.value))
                  ? null
                  : form.setFieldError('email', 'Email already in use')
                // return savedUsers.some(user => user.email === e.target.value)
                //   ? form.setFieldError('email', 'Email already in use')
                //   : null
              }
              field.onBlur(e)
            }}
          />
          <Text color={'red'}>
            <ErrorMessage name={inputName} />
          </Text>
        </FormControl>
      )}
    </Field>
  )
}
