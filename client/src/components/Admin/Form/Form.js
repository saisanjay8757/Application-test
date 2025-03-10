import { Button, Container, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import useStyles from './styles'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {createPost,updatePost } from '../../../actions/posts'

const Form = ({currentId,setCurrentId}) => {

  const [postData, setPostData] = useState({ title: '', tagline: '',desc:'',dept:"Sports", selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.data.posts.find((message) => message._id === currentId) : null));

  const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(()=>{
    if (post) setPostData(post) 
  },[post])


  const clear = () =>{
    setCurrentId(0);
    setPostData({ title: '', tagline: '',desc:'',dept:"Sports", selectedFile: '' });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    if (currentId === 0) {
        dispatch(createPost(postData));
        clear();
      } else {
        dispatch(updatePost(currentId,postData));
        clear();
      }
  }

  

  return (
    <Container>
      <br></br><br></br><br></br><br></br>
      <Paper className={classes.paper}  elevation={5} >
      <Typography variant='h3' >Enter the article</Typography><br></br>
        <form autoComplete="off" validate="true" className={`${classes.root}`} onSubmit={handleSubmit} >
          <TextField
           required 
           fullWidth 
           minRows={4}
           name='title' 
           label="Title" 
           value = {postData.title}
           onChange={(e)=>{setPostData({...postData,title: e.target.value})}} /> <br /><br />

          <TextField required fullWidth minRows={4} name='tagline' label="Tagline" onChange={(e)=>{setPostData({...postData,tagline: e.target.value})}} value={postData.tagline} /> <br /><br />

          <TextField required fullWidth minRows={4} name='desc' label="Description" multiline onChange={(e)=>{setPostData({...postData,desc: e.target.value})}} value={postData.desc} /> <br /><br />

          <InputLabel required className={classes.dropdown} id="demo-simple-select-label">Category</InputLabel>

          <Select labelId="demo-simple-select-label" id="demo-simple-select" name='category' value={postData.dept}
           label="Category" onChange={(e)=>{setPostData({...postData,dept: e.target.value})}}  >
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Politics"}>Politics</MenuItem>
            <MenuItem value={"Crime"}>Crime</MenuItem>
            <MenuItem value={"Education"}>Education</MenuItem>
            <MenuItem value={"Bussiness"}>Bussiness</MenuItem>
            <MenuItem value={"National"}>National</MenuItem>
            <MenuItem value={"International"}>International</MenuItem>
          </Select>

          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>

          <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear} >Clear</Button>
        </form>

      </Paper>
    </Container>
  )
}
export default Form