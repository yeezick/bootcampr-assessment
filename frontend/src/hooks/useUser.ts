import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { User } from 'screens/SignUp/SignUpForm/SignUpForm'

type UseUsersHook = () => [User[], Dispatch<SetStateAction<User[]>>]

export const useUsers: UseUsersHook = () => {
  const [savedUsers, setSavedUsers] = useState<User[]>(() => {
    const currentUsers = localStorage.getItem('bootcampr-users')
    return currentUsers ? JSON.parse(currentUsers) : []
  })

  useEffect(() => {
    localStorage.setItem('bootcampr-users', JSON.stringify(savedUsers))
  }, [savedUsers])

  return [savedUsers, setSavedUsers]
}
