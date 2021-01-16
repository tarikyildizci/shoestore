import React from "react"
import { StateProvider } from "./src/context/GlobalProvider"

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}
