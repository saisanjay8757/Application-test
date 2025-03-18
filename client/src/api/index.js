import axios from 'axios';

const API = axios.create({ baseURL: 'http://a7637adcf211a4193a125fb13924f7f5-1954920476.ap-south-1.elb.amazonaws.com:8080/api/v1/' });


export const fetchPosts = () => API.get(`/posts`);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const createPost = (newpost) => API.post(`/posts`,newpost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);