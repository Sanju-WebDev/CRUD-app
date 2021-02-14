import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchPosts = () => {
  return (dispatch) => {
      axiosInstance.get('/posts')
        .then(res => {
          const posts = res.data;
          dispatch(updatePosts(posts))
        })
        .catch(err => {
          console.error(err);
        })
  };
};
export const addPosts = (input) => {
  return (dispatch) => {
      axiosInstance.post('/posts')
        .then(res => {
          dispatch(newPosts(res.data.id, input))
        })
  };
};

export const updatePosts = (posts) => {
  return {
    type: 'LIST_POSTS', 
    payload: posts
  }
}
export const newPosts = (id, posts) => {
  return {
    type: 'ADD_POST',
    payload:{
      id: id, 
      title: posts.title, 
      body: posts.body,
      userId: posts.userId
    } 
  }
}
