import { Checkbox, HStack, Text } from '@chakra-ui/react'

export default function ConsentCheckbox({
  agree,
  setAgree,
  showPasswordHints,
  setShowPasswordHints,
  isValid,
  children,
}) {
  const handleCheck = (isValid: boolean) => {
    setAgree(!agree)
    if (isValid) {
      setShowPasswordHints(!showPasswordHints)
    }
  }

  return (
    <HStack alignItems='flex-start' mb={5}>
      <Checkbox
        isChecked={agree}
        pt={1}
        onChange={() => handleCheck(isValid)}
      />
      <Text ml={4} mr={8} fontSize='14px'>
        {children}
      </Text>
    </HStack>
  )
}
