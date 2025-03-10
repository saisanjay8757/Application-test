import React, { useEffect } from 'react'
import Home from './components/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Grow } from "@material-ui/core"
import { BrowserRouter, Routes, Route ,Navigate  } from 'react-router-dom';
import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Admin/Form/Form'
import Auth from './components/Admin/Auth/Auth'
import Adminhome from './components/Admin/Adminhome/Adminhome'
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
    //const { posts } = useSelector((state) => state.posts);
    //const useEffect =useEffect()
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getPosts())
    },[])



    return (
        <BrowserRouter>
            <Container>
                <Navbar />
                <Routes> 
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/admin" exact element={<Auth/>}/>
                    <Route path="/ahome" exact element={<Adminhome/>}/>
                    <Route path="/:id"  element={<PostDetails/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;