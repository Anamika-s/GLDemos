import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
export default class GridD extends Component {
  render() {
    return (
      < > 
<Container>
  <Grid container justify="space-between">
    <Grid item lg={3}> 
    <Paper>
      <Box p={2}>
      <Typography variant="h3"> 
        Read Docs
      </Typography>
      
      <Typography variant="subtitle1">
      In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and consistently across browsers. Historically, there  

      </Typography>
      
      <Typography>
        Read Docs
      </Typography>
      
      <Button>
        Read Docs
      </Button>
      </Box>  
      </Paper> </Grid>
  
  <Grid item lg={4}> 
    <Paper>
      <Box p={2}>
      <Typography variant="h4"> 
        Read Docs
      </Typography>
      
      <Typography variant="subtitle1">
      In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web  

      </Typography>
      
      <Typography>
        Read Docs
      </Typography>
      
      <Button>
        Read Docs
      </Button>
      </Box>  
      </Paper> </Grid>

      <Grid item lg={3}> 
    <Paper>
      <Box p={2}>
      <Typography variant="h4"> 
        Read Docs
      </Typography>
      
      <Typography variant="subtitle1">
      In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web  
      </Typography>
      
      <Typography>
        Read Docs
      </Typography>
      
      <Button>
        Read Docs
      </Button>
      </Box>  
      </Paper> </Grid>
 
  </Grid>
  </Container>


      </ >
    )
  }
}
