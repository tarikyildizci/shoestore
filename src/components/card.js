import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import DeleteIcon from "@material-ui/icons/Delete"

import { StateContext } from "../context/GlobalProvider"

const ShoeCard = ({ data, buttonDelete }) => {
  const [isRaised, setIsRaised] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const { cartItems, setCartItems } = useContext(StateContext)

  const AddToCart = () => {
    if (!addedToCart) {
      setAddedToCart(true)
      const newItem = data
      setCartItems(prevCartItems => [...prevCartItems, newItem])
    }
  }

  const RemoveFromCart = () => {
    let itemsCopy = [...cartItems]
    itemsCopy.splice(cartItems.indexOf(data), 1)
    setCartItems(itemsCopy)
  }
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        onMouseOver={() => {
          setIsRaised(true)
        }}
        onMouseOut={() => {
          setIsRaised(false)
        }}
        raised={isRaised}
        style={{ minHeight: "310px" }}
      >
        <CardMedia
          component="img"
          alt="Shoe"
          height="200"
          image={data.image}
          title={data.productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.brand} - {data.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.price}$
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            {buttonDelete ? (
              <Button
                onClick={RemoveFromCart}
                size="small"
                variant="contained"
                color="secondary"
              >
                <DeleteIcon fontSize="small" />
                Remove Item
              </Button>
            ) : (
              <Button
                onClick={AddToCart}
                size="small"
                variant="contained"
                color="primary"
                disabled={addedToCart}
              >
                <ShoppingCartIcon fontSize="small" />
                {addedToCart ? "Added To Cart" : "Add To Cart"}
              </Button>
            )}
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ShoeCard
