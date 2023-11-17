import { Landing } from './screens/Landing/Landing'
import { SignUp } from './screens/Sign-Up/SignUp'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
