import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import Signup from 'screens/Signup/Signup'
import Congrats from 'screens/Congrats/Congrats'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/congrats-screen' element={<Congrats/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
