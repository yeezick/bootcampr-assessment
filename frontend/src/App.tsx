import { Landing } from './screens/Landing/Landing'
import { Register } from './screens/Register/Register'
import { SuccessPage } from './screens/Register/SuccessPage'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/registered' element={<SuccessPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
