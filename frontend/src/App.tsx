import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { SignUp } from 'screens/Sign-Up/SignUp'
import { Success } from 'screens/Success/Success'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='success' element={<Success />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
