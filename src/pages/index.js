import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filter from "../components/filter"
import * as api from "../components/APIFunctions"

const IndexPage = () => {
  const classes = useStyles()
  //state that holds cards in an array
  const [display, setDisplay] = useState()

  const GetProducts = async () => {
    const response = await api.GetAllProducts()
    setDisplay(response)
  }

  //on render makes call to api
  useEffect(() => {
    GetProducts()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container className={classes.root} spacing={2}>
        <Filter setDisplay={setDisplay} />
        {display ? display : <CircularProgress />}
      </Grid>
    </Layout>
  )
}

export default IndexPage

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: { height: 300, width: 300 },
  control: {
    padding: theme.spacing(2),
  },
}))
