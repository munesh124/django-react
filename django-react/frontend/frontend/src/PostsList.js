import  React, { Component } from  'react';
import PostService from './PostService'


const  postsService  =  new  PostService();

class  PostsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
    };
}

componentDidMount() {
    var  self  =  this;
    postsService.getPosts().then(function (result) {
        self.setState({ posts:  result.data})
    });
}

handleDelete = (e,id) => {
    var  self  =  this;
    postsService.deletePost({id :  id}).then(()=>{
        var  newArr  =  self.state.posts.filter(function(obj) {
            return  obj.id  !==  id;
        });
        self.setState({posts:  newArr})
    });
}
render() {
    return (
        <div>
            <table>
            <thead>
            <tr className="row">
                <th className="col-3">Title</th>
                <th className="col-3">Description</th>
                <th className="col-3">Created At</th>
                <th className="col-3">Action</th>
            </tr>
            </thead>
            <tbody>
            {this.state.posts.map( c  =>
                <tr  key={c.id} className="row">
                <td className="col-3">{c.title}</td>
                <td className="col-3">{c.description}</td>
                <td className="col-3">{c.created_at}</td>
                <td className="col-3">
                <button  onClick={(e)=>  this.handleDelete(e,c.id) }> Delete</button>
                <a  href={"/post/" + c.id}> Update</a>
                </td>
            </tr>)}

            </tbody>
            </table>
        </div>
        );
  }
}
export  default  PostsList;