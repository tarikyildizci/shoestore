import React, { useState } from "react"

export const StateContext = React.createContext()

export const StateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  return (
    <StateContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

//I store the items in the cart in this context
