import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Impressum from './pages/Impressum'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="impressum" element={<Impressum />} />
        </Route>
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
