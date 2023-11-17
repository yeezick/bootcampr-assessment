import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { Signup } from './signup/Signup'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
        </Routes>
      </Layout>

     
      {/* <Signup>
        <Routes>
          
        </Routes>
      </Signup> */}
    </>
  )
}

export default App
