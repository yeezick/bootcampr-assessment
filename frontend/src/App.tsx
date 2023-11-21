import { Landing } from './screens/Landing/Landing'
import { Signup } from './screens/Signup/Signup'
import { Home } from 'screens/Home/Home'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
