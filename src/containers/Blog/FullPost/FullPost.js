import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.id}`).then(
      response => {
        console.log('FullPost#: ', response)
      }
    )
  }

  componentDidMount() {
    const { postId } = this.props.match.params
    if (postId) {
      if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== postId)) {
        axios.get(`/posts/${postId}`).then(
          response => {
            this.setState({loadedPost: response.data})
          }
        )
      }
    }
  }
    render () {
        const { postId } = this.props.match.params

        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(postId) {
          post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
          post = (
              <div className="FullPost">
                  <h1>{this.state.loadedPost.title}</h1>
                  <p>{this.state.loadedPost.body}</p>
                  <div className="Edit">
                      <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                  </div>
              </div>

          );}
        return post;
    }
}

export default FullPost;
