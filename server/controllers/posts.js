import express from 'express';
import mongoose from 'mongoose';

import Posts from '../models/posts.js';

const router = express.Router();



export const getPosts = async (req, res) => {
    
    try {
        const data = await Posts.find()
        res.json( data);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Posts.findById(id);
        res.json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body
    const newPost = new Posts(post)
    try {
        
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, tagline, desc, dept, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, tagline, desc, dept, selectedFile , _id: id };

    await Posts.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Posts.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;