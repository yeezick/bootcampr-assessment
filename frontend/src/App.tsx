import { Landing } from './screens/Landing/Landing'
import { SignUp } from './screens/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'
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
