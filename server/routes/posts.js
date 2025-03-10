import express from 'express';

import { getPosts,createPosts,getPost,updatePost,deletePost } from '../controllers/posts.js';

const router = express.Router();
//import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/',createPosts);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);


export default router;