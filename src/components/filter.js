import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Typography from "@material-ui/core/Typography"
import * as api from "./APIFunctions"

const Filter = ({ setDisplay }) => {
  const [key, setKey] = useState("")
  const [value, setValue] = useState("")
  const [order, setOrder] = useState("desc")

  async function ApplyFilters() {
    if (value) {
      const response = await api.Search(key, value, order)
      setDisplay(response)
    } else {
      const response = await api.GetAllProducts(order)
      setDisplay(response)
    }
  }

  async function ClearFilters() {
    const response = await api.GetAllProducts()
    setDisplay(response)
    setKey("")
    setValue("")
  }

  const KeyChange = event => {
    setKey(event.target.value)
  }
  const ValueChange = event => {
    setValue(event.target.value)
  }
  const OrderChange = async event => {
    const newOrder = event.target.value
    setOrder(newOrder)
    if (value) {
      const response = await api.Search(key, value, newOrder)
      setDisplay(response)
    } else {
      const response = await api.GetAllProducts(newOrder)
      setDisplay(response)
    }
  }

  return (
    <Grid item xs={12} container spacing={2} style={{ marginBottom: "10px" }}>
      <Grid item xs={12}>
        <Typography
          style={{ paddingLeft: "50px" }}
          variant="h4"
          gutterBottom
          align="left"
        >
          Filters:
        </Typography>
      </Grid>
      <Grid item xs={6} md={2} container justify="center" alignItems="center">
        <FormControl variant="outlined" style={{ minWidth: "150px" }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Filter By
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={key}
            onChange={KeyChange}
            label="Filter By"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"brand"}>Brand</MenuItem>
            <MenuItem value={"color"}>Color</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {key === "brand" ? (
        <Grid item xs={6} md={2} container justify="center" alignItems="center">
          <FormControl variant="outlined" style={{ minWidth: "150px" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Brand
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={value}
              onChange={ValueChange}
              label="Value"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={"nuke"}>Nuke</MenuItem>
              <MenuItem value={"aytmz"}>Aytmz</MenuItem>
              <MenuItem value={"adiclas"}>Adiclas</MenuItem>
              <MenuItem value={"adiclas"}>Pusher</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      ) : key === "color" ? (
        <Grid item xs={6} md={2} container justify="center" alignItems="center">
          <FormControl variant="outlined" style={{ minWidth: "150px" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={value}
              onChange={ValueChange}
              label="Color"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={"black"}>Black </MenuItem>
              <MenuItem value={"brown"}>Brown</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"white"}>White</MenuItem>
              <MenuItem value={"red"}>Red</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      ) : (
        <Grid item xs={6} md={2}></Grid>
      )}
      {/* whitespace */}
      <Grid item xs={1} md={2}></Grid>
      <Grid item xs={3} md={2} container justify="center" alignItems="center">
        <Button onClick={ApplyFilters} variant="contained" color="primary">
          Apply Filters
        </Button>
      </Grid>
      <Grid item xs={3} md={2} container justify="center" alignItems="center">
        <Button onClick={ClearFilters} variant="contained" color="secondary">
          Clear Filters
        </Button>
      </Grid>
      <Grid item xs={5} md={2} container justify="center" alignItems="center">
        <FormControl variant="outlined" style={{ minWidth: "100px" }}>
          <InputLabel id="demo-simple-select-outlined-label">Order</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={order}
            onChange={OrderChange}
            label="Order"
          >
            <MenuItem value={"desc"}>Price high to low</MenuItem>
            <MenuItem value={"asc"}>Price low to high</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Filter
