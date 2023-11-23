import { Button } from '@chakra-ui/react'

export default function SubmitButton({
  isSubmitting,
  agree,
  isValid,
  children,
}) {
  return (
    <Button
      type='submit'
      isLoading={isSubmitting}
      isDisabled={!agree || !isValid}
      // _disabled={{ opacity: 1, cursor: 'not-allowed' }} //matches design but impacts UX
      backgroundColor={agree && isValid ? '#EC993B' : '#ECEBEB'}
      _hover={{ background: agree && isValid ? '#EC993B' : '#ECEBEB' }}
      width={'448px'}
    >
      {children}
    </Button>
  )
}
