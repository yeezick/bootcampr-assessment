import { Landing } from './screens/Landing/Landing'
import { Signup } from './screens/Signup/Signup';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Congrats from 'screens/Congrats/Congrats';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/congrats' element={<Congrats />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
