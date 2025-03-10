
import * as api from '../api/index.js';
export const getPosts = ()=> async(dispatch) =>{
    try {
        const jsonresponse= await api.fetchPosts()
        const data = jsonresponse.data
        console.log(data);
        
        dispatch({ type: "FETCH_ALL", payload:  {"data":data}  });// for using payload.data
    } catch (error) {
        console.log(error);
    }
}

export const getPost = (id)=> async(dispatch) =>{
    try {        
        const jsonresponse  = await api.fetchPost(id);
        console.log(11);
        const data = jsonresponse.data
        dispatch({ type: "FETCH_POST", payload:  {"post":data}  });// for using payload.data
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (post)=> async(dispatch) =>{
    try {
        
        const jsonresponse  = await api.createPost(post);
        const data = jsonresponse.data
        
        dispatch({ type: "CREATE", payload:  {"data":data}  });// for using payload.data
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id,post)=> async(dispatch) =>{
    try {
        console.log(id,post);
        const jsonresponse  = await api.updatePost(id,post);
        const data = jsonresponse.data
        
        dispatch({ type: "UPDATE", payload:  {"data":data}  });// for using payload.data
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id)=> async(dispatch) =>{
    try {
        await api.deletePost(id);
    
        dispatch({ type: "DELETE", payload: id });
      } catch (error) {
        console.log(error.message);
      }
}