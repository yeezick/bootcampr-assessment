import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { SignUp } from 'screens/SignUp/SignUp'
import { Index } from 'screens/Index/Index'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/index' element={<Index />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
