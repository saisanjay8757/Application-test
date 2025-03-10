import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    
    desc: { type: [String], default: [] },
    
})

var Posts = mongoose.model('Posts', postSchema);

export default Posts