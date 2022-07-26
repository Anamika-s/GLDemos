import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
export default class GridDemo extends Component {
  render() {
    return (
      <Container>
  <Grid container spacing="3" justifyContent='space-evenly' align-items='center'>
  <Grid item lg={3} md={6} style={{ margin:10 }}>
    <Paper>
      <Box p={3}>
      <Typography variant="h4">
          Read Docs
      </Typography>
      <Typography variant="subtitle1">
      It uses CSS’s Flexible Box module for high flexibility.
There are two types of layout: containers and items.
Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
 

      </Typography>
      <Typography>
        <Button> Read Contents </Button>
      </Typography>
      </Box>
    </Paper>
     </Grid>
     <Grid item lg={3} md={6} mx={10}>
    <Paper>
    <Box  p={3}>
      <Typography variant="h4">
          Read Docs
      </Typography>
      <Typography variant="subtitle1">
      It uses CSS’s Flexible Box module for high flexibility.
There are two types of layout: containers and items.
Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
 

      </Typography>
      <Typography>
        <Button> Read Contents </Button>
      </Typography>
      </Box>
    </Paper>
     </Grid>
     <Grid item lg={3} md={6}>
    <Paper>
      <Box  p={3}>
      <Typography variant="h4">
          Read Docs
      </Typography>
      <Typography variant="subtitle1">
      It uses CSS’s Flexible Box module for high flexibility.
There are two types of layout: containers and items.
Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
 

      </Typography>
      <Typography>
        <Button> Read Contents </Button>
      </Typography>
      </Box>
    </Paper>
     </Grid>
</Grid>

</Container>
    )
  }
}
