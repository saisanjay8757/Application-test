import React from 'react'
import { Paper, Typography, Link, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

import { getPost } from '../../actions/posts';

const Post = ({ post }) => {
    const dispatch = useDispatch()
    const history = useNavigate()

    const openPost = () => {
        console.log(post._id);

        dispatch(getPost(post._id))

        history(`/${post._id}`);
    }

    return (
        <div>
            <Grid container spacing={6} >
                <Grid item  >
                kk
                </Grid>
                <Grid item  >
                    <a href='' style={{textDecoration:'none',color:'black'}} onClick={openPost} ><h3> {post.title} </h3></a>
                    <h5> j </h5>
                </Grid>
            </Grid>
        </div>
    )
}

export default Post