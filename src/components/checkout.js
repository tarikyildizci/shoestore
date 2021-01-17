import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import React, { useState } from "react"

const Checkout = ({ cartItems, setCartItems, cartTotal }) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogText, setDialogText] = useState({})

  const textSuccess = {
    title: "🎉Thank you for your purchase!",
    body: "Your shoes are on their way.",
  }
  const textFail = {
    title: "🙊There are no items in your cart!",
    body: "Choose great shoes!",
  }

  const CheckoutHandler = () => {
    if (cartItems.length > 0) {
      setDialogText(textSuccess)
      setCartItems([])
    } else {
      setDialogText(textFail)
    }
    setDialogOpen(true)
  }
  const ModalClose = () => {
    setDialogOpen(false)
  }

  return (
    <Grid item xs={12} container>
      <Grid item xs={6}>
        <Button onClick={CheckoutHandler} variant="contained" color="primary">
          Checkout
        </Button>
        <Typography variant="body1">{cartTotal}$</Typography>
        <Dialog
          open={dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={ModalClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {dialogText.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {dialogText.body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ModalClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  )
}

export default Checkout

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
