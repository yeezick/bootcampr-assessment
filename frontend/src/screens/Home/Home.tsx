import React, { useState, useEffect } from 'react'
import './Home.scss'
import { getUsers } from 'utils/userController'

interface IUser {
  email: string
  createdAt: string
  updatedAt: string
}

export const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const userList = await getUsers()
      setUsers(userList)
      setIsLoading(false)
    })()
  }, [])

  return (
    <div className='home-container'>
      <h2>Current List of Users</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='home-users-table-container'>
          <table className='home-users-table'>
            <tr className='home-users-table-headers'>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Created Date</td>
              <td>Date Last Updated</td>
            </tr>
            {users.map(ele => {
              return (
                <tr>
                  {Object.values(ele).map(ele => {
                    return <td>{ele}</td>
                  })}
                </tr>
              )
            })}
          </table>
        </div>
      )}
    </div>
  )
}
