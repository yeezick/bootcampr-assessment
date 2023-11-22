import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { Signup } from './signup/Signup'
import { Login } from 'signup/Completion'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-up-complete' element={<Login />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
