import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PostsService{
    getPosts() {
        const url = `${API_URL}/api/posts/`;
        return axios.get(url).then(response => {
            console.log(response)
            return response})
    }  
    getPost(id) {
        const url = `${API_URL}/api/posts/${id}/`;
        return axios.get(url).then(response => response.data)
    }
    deletePost(post){
        const url = `${API_URL}/api/posts/${post.id}/`;
        return axios.delete(url);
    }
    createPost(post){
        const url = `${API_URL}/api/posts/`;
        return axios.post(url,post);
    }
    updatePost(post){
        const url = `${API_URL}/api/posts/${post.id}/`;
        return axios.put(url,post);
    }
}