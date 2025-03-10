import React from 'react'
import { useSelector } from 'react-redux';
import Apost from './APost/Apost';

const Aposts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.data.posts); 
  return (
    <div>Aposts
      {
        posts.map((itr)=>(
          <Apost post={itr} setCurrentId={setCurrentId} />
        ))
      }

    </div>
  )
}

export default Aposts