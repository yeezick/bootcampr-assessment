import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, FieldProps } from 'formik'

export default function SimpleInput({ inputName, children }) {
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
            bg={'#ECEBEB'}
            onFocus={() => form.setFieldTouched(inputName)}
          />
          <Text color={'red'}>
            <ErrorMessage name={inputName} />
          </Text>
        </FormControl>
      )}
    </Field>
  )
}
