import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import React from "react"

const Header = ({ siteTitle }) => {
  return (
    <AppBar
      style={{ minHeight: "100px", marginBottom: "10px" }}
      position="static"
      color="primary"
    >
      <Grid
        style={{ marginTop: "10px" }}
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={7} md={4}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Typography variant="h3">{siteTitle}</Typography>
          </Link>
        </Grid>
        <Grid item xs={2} md={5}></Grid>
        <Grid item xs={1}>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <ShoppingCartIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
