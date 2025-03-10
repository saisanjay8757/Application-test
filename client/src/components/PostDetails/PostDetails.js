import React, { useEffect } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Button, Paper } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../actions/posts'

const PostDetails = () => { 
  const { id } = useParams();
  const dispatch = useDispatch() 
  const history = useNavigate(); 
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);


  const post = useSelector((state) => state.data.post);
  const posts = useSelector((state) => state.data.posts);

  const fil_posts = posts.filter((itr)=>(itr._id !== id && itr.dept === post[0]?.dept) )

  const openPost = (_id) => history(`/${_id}`);
  

  return (
    <div> <br></br><br></br><br></br><br></br><br></br> 

      <Paper style={{padding:'15px'}} >
        <h1><b>Details</b></h1>
        <img height='100' width='100' src={post[0]?.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
        <h2>{post[0]?.title}</h2>
        <h4>{post[0]?.tagline}</h4>
        <p>{post[0]?.desc}</p>

      </Paper>

      <Paper style={{padding:'15px'}} >
      <h1><b>Related News</b></h1>
      {
        fil_posts.map((pos)=>(
          <>
            <a style={{textDecoration:'none',color:'black'}} href='' onClick={()=>{openPost(pos._id)}} ><h3> {pos?.title} </h3></a>
          </>
        ))
      }
      </Paper>
      
    </div> 
  )
}

export default PostDetails

{/* <h1>{post.title}</h1>

<h4>{post.tagline}</h4>
<p>{post.desc}</p> */}