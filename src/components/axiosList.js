import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions/update';
import InputPost from './inputPost';

function AxiosList() {

const dispatch = useDispatch();
const input = useSelector(state => state.input);

useEffect(() => {
  dispatch(fetchPosts())
}, [dispatch, InputPost]);

const data = useSelector(state => state.posts);

  return (
    <>
    <InputPost />
    <div className= "posts-container">
      <h2>Users List</h2>
      <div className= "posts-details">
        {data &&
         data.posts &&
          data.posts.map(post => 
            <div className= "each-post" key= {post.id}>
              <p>ID: {post.id}</p>
              <p>User ID: {post.userId}</p>
              <p>Title: {post.title}</p>
              <p><small>Body: {post.body}</small></p>
            </div>
          )       
        }
      </div>
    </div>
    </>
  )
}

export default AxiosList
