import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts } from './actions/update';
import './inputForm.css';

function InputPost() {

const [newPost, setNewPost] = useState({
    userId: '', 
    title: '', 
    body: ''
});
function inputHandler(e) {
    setNewPost(newpost => ({...newPost, [e.target.name]: e.target.value}))
}
const dispatch = useDispatch();
const addHandler = (e) => {
    e.preventDefault();
    dispatch(addPosts(newPost));
}

    return (
        <div className= "form-container">
            <div className= "form-header">
                Enter New Post Details
            </div>
            <form onSubmit= {addHandler} className= "input-form">
                <label>User ID:</label>
                <input type= "text" name= 'userId' value= {newPost.userId} onChange= {inputHandler}></input>
                <label>Title:</label>
                <input type= "text" name= 'title' value= {newPost.title} onChange= {inputHandler}></input>
                <label>Body:</label>
                <input type= "text" name= 'body' value= {newPost.body} onChange= {inputHandler}></input>
                <input type= "submit" value= "Add Post" className= "submit-btn"></input>
            </form>
        </div>
    )
}

export default InputPost;
