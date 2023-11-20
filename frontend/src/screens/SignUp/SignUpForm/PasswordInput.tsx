import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { ErrorMessage, Field, FieldProps } from 'formik'

export default function PasswordInput({
  inputName,
  show,
  setShow,
  showPasswordHints,
  children,
}) {
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
          <InputGroup>
            <Input
              {...field}
              type={show ? 'text' : 'password'}
              bg={'#ECEBEB'}
              onFocus={() => form.setFieldTouched(inputName)}
            />
            <InputRightElement>
              <Button
                background='none'
                _hover={{ background: 'none' }}
                onClick={() => setShow(!show)}
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text color={'red'}>
            <ErrorMessage name={inputName} />
          </Text>

          {field.name === 'password' && showPasswordHints ? (
            <PasswordHints field={field} form={form} />
          ) : null}

          {showPasswordHints &&
          form.touched.confirmPassword &&
          !form.errors.confirmPassword &&
          form.values.password === form.values.confirmPassword ? (
            <Text color={'#23A6A1'} fontSize={'12px'}>
              Passwords match!
            </Text>
          ) : null}
        </FormControl>
      )}
    </Field>
  )
}

function PasswordHints({ field, form }) {
  return (
    <VStack fontSize={'12px'} align={'start'} spacing={1} mt={1}>
      <Text
        color={
          !form.touched.password
            ? 'black'
            : /[A-Z]/.test(field.value)
            ? '#23A6A1'
            : '#D90000'
        }
      >
        {/[A-Z]/.test(field.value) ? <span>&#10003;</span> : null}1 uppercase
      </Text>
      <Text
        color={
          !form.touched.password
            ? 'black'
            : /[a-z]/.test(field.value)
            ? '#23A6A1'
            : '#D90000'
        }
      >
        {/[a-z]/.test(field.value) ? <span>&#10003;</span> : null}1 lowercase
      </Text>
      <Text
        color={
          !form.touched.password
            ? 'black'
            : /\d/.test(field.value)
            ? '#23A6A1'
            : '#D90000'
        }
      >
        {/\d/.test(field.value) ? <span>&#10003;</span> : null} 1 number
      </Text>
      <Text
        color={
          !form.touched.password
            ? 'black'
            : field.value.length >= 8
            ? '#23A6A1'
            : '#D90000'
        }
      >
        {field.value.length >= 8 ? <span>&#10003;</span> : null}
        Minimum 8 characters
      </Text>
    </VStack>
  )
}
