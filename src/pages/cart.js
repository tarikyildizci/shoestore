import React, { useContext, useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import ShoeCard from "../components/card"
import Checkout from "../components/checkout"
import SEO from "../components/seo"
import { StateContext } from "../context/GlobalProvider"

const Cart = () => {
  const { cartItems, setCartItems } = useContext(StateContext)
  const [display, setDisplay] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const CardMaker = () => {
    setCartTotal(0)
    let itemsToDisplay = []
    cartItems.forEach(item => {
      setCartTotal(prevCartTotal => prevCartTotal + parseInt(item.price))
      itemsToDisplay.push(
        <ShoeCard key={item.id} data={item} buttonDelete={true} />
      )
    })

    setDisplay(itemsToDisplay)
  }

  useEffect(() => {
    CardMaker()
  }, [cartItems])

  return (
    <Layout>
      <SEO title="Cart" />
      <Grid container spacing={2}>
        <Checkout
          setCartItems={setCartItems}
          cartItems={cartItems}
          cartTotal={cartTotal}
        />
        {display && display[0] ? (
          display
        ) : (
          <Typography>You have no items in your cart.</Typography>
        )}
      </Grid>
    </Layout>
  )
}

export default Cart
