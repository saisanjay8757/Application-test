import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import './styles.css'
import { useDispatch } from 'react-redux'
import { getPost, deletePost } from '../../../../actions/posts'
import { useNavigate } from 'react-router-dom';


const Apost = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()
  const history = useNavigate()


  
  return (
    <div>

      <h3>{post.title}</h3>
      <Button onClick={(e) => {
        e.stopPropagation()
        setCurrentId(post._id)

      }} >
        <BiEdit size={20} className='icon' />
      </Button>
      <Button onClick={() => dispatch(deletePost(post._id))} >
        <AiFillDelete size={20} className='icon' />
      </Button>
      <h6>{post.tagline}</h6>



    </div>
  )
}

export default Apost

/*

const openPost = () => {
    dispatch(getPost(post._id))

    history(`/ahome/${post._id}`);
}
<a class="header" href='' onClick={openPost} ><h3>{post.title}</h3></a>
*/

