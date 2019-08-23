import React, { Component } from 'react';
import PostsService from './PostService';

const postsService = new PostsService();

class PostCreateUpdate extends Component {

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.id)
        {
          postsService.getPost(params.id).then((c)=>{
            this.refs.title.value = c.title;
            this.refs.description.value = c.description;

          })
        }
      }
      handleCreate(){
        postsService.createPost(
          {
            "title": this.refs.title.value,
            "description": this.refs.description.value,
        }          
        );
      }
      handleUpdate(id){
        postsService.updatePost(
          {
            "id": id,
            "title": this.refs.title.value,
            "description": this.refs.description.value,
        }          
        );
      }
      handleSubmit = (event) => {
        const { match: { params } } = this.props;
        if(params && params.id){
          this.handleUpdate(params.id);
        }
        else
        {
          this.handleCreate();
        }
      }
      render() {
        return (
          <div>
            <input type="text" ref='title' placeholder="Enter Post Title" />
            <br/>
            <br/>
            <textarea ref='description' placeholder="Enter Post Description" rows="10" cols="35"/>
            <br/>
            <br/>
            <a  href={"/"}><button onClick={() => this.handleSubmit()}>Submit</button></a>
            </div>
        );
      }  
}

export default PostCreateUpdate;