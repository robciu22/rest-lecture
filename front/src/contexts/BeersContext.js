import { createContext, useEffect, useState } from 'react'
import { fetchBeers } from '../utils/helper'

const BeersContext = createContext()

const BeersContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    fetchBeers(setBeers)
  }, [])

  return <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
}

export { BeersContext, BeersContextProvider }
