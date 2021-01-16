import React from "react"
import axios from "axios"
import ShoeCard from "../components/card"

export const GetAllProducts = async order => {
  if (!order) {
    order = "desc"
  }
  const response = await axios.get(
    `https://600185c508587400174daf60.mockapi.io/products?sortBy=price&order=${order}`
  )
  const data = response.data
  let display = []
  data.forEach(item => {
    display.push(<ShoeCard key={item.id} data={item} />)
  })
  return display
}

export const Search = async (key, value, order) => {
  try {
    const response = await axios.get(
      `https://600185c508587400174daf60.mockapi.io/products?${key}=${value}&sortBy=price&order=${order}`
    )
    const data = response.data
    let display = []
    data.forEach(item => {
      display.push(<ShoeCard key={item.id} data={item} />)
    })
    return display
  } catch (error) {
    console.log(error)
  }
}
