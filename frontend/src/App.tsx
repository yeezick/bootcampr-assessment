import { Landing } from './screens/Landing/Landing'
import { SignUp } from './screens/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Success } from 'screens/Success/Success'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
