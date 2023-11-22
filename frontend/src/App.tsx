import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import SignUp from 'screens/SignUp/Sign-Up'
import PostSignUp from 'screens/SignUp/Sign-Up'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/post-sign-up' element={<PostSignUp />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
