import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { BeersContextProvider } from './contexts/BeersContext'
import AllBarsPage from './pages/AllBarsPage'
import AllBeersPage from './pages/AllBeersPage'
import BarDetailsPage from './pages/BarDetailsPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BeersContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<AllBeersPage />} />
          <Route path='/bars' element={<AllBarsPage />} />
          <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
          <Route path='/bars/:barId' element={<BarDetailsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BeersContextProvider>
  )
}

export default App
