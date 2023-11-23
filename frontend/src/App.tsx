import { Landing } from './screens/Landing/Landing'
import { Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
