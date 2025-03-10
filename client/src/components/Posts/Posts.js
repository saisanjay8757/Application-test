import {  useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Post from './Post';

const Posts = ({posts}) => {

  
  
  return (
    <div>
      {posts?.map((post) => (
        <Post post={post}   />
      ))}
    </div>
  )
}

export default Posts;

/* 

<a class="header" href='' onClick={openPost} ><h3>{post.title}</h3></a>
*/