import { Landing } from './screens/Landing/Landing'
import { Register } from './screens/Register/Register'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Register />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
