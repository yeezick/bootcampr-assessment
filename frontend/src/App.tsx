import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { Signup } from './signup/Signup'
import { Login } from 'SignIn/SignIn'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Layout>

     
      {/* <Signup>
        <Routes>
          
        </Routes>
      </Signup> */}
    </>
  )
}

export default App
