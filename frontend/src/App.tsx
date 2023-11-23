import { Landing } from './screens/Landing/Landing'
import Signup from './Signup'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
