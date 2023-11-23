import { Landing } from './screens/Landing/Landing'
import { SignUp } from './screens/SignUp/SignUp'
import { Congrats } from './screens/Congrats/Congrats'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/congrats' element={<Congrats />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
