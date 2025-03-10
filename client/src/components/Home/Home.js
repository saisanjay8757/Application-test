import { getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts';
import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import useStyles from './Styles';

const Home = () => {

  const classes = useStyles();

  const posts = useSelector((state) => state.data.posts);
  console.log(posts);

  const politics = posts.filter((itr) => (itr.dept === "Politics"))
  const bussiness = posts.filter((itr) => (itr.dept === "Bussiness"))
  const sports = posts.filter((itr) => (itr.dept === "Sports"))

  return (
    <Grow in>
      <Container >
        <br></br><br></br><br></br><br></br>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}  >
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <h1><b>Exclusive News </b></h1>
              <Posts posts={posts} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <h1><b> Special Focus </b></h1>

            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <Typography variant="h3" >Politics</Typography>
              <Posts posts={politics} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              <Typography variant="h3" >Bussiness</Typography>
              <Posts posts={bussiness} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}><Typography variant="h3" >Sports</Typography>
              <Posts posts={sports} /></Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
//