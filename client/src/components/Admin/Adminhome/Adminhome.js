import { Container, Grid, Grow, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Aposts from '../AdminPosts/Aposts';
import { useDispatch, useSelector } from 'react-redux';


const Adminhome = () => {

  const [currentId, setCurrentId] = useState(0)


  return (
    <Grow in>
      <Container >
        <br></br><br></br><br></br><br></br>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}  >
            <h1><b>News </b></h1>
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <Aposts setCurrentId={setCurrentId} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow> 

  )
}

export default Adminhome

/*

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <br></br><br></br><br></br><br></br>
            <Aposts setCurrentId ={setCurrentId} />
          </Grid>
          <Grid item xs={6}>
            <Form currentId={currentId} setCurrentId ={setCurrentId} />
          </Grid>
          <Grid item xs={6}>
            hloo
          </Grid>
          <Grid item xs={6}>
            hiii
          </Grid>
        </Grid>
*/