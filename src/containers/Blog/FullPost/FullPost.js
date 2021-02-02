import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  deletePostHandler = () => {
    const { postId } = this.props.match.params

    axios.delete(`/posts/${postId}`).then(
      response => {
        console.log('FullPost#: ', response)
      }
    )
  }

  lodadData() {
    const { postId } = this.props.match.params
    // console.log('============= fullpost', postId)

    if (postId) {
      // postId is an string
      // this.state.loadedPost.id is a number
      // that's why I cannot use strict comparison or use +postId to convert it to number
      if(!this.state.loadedPost || (this.state.loadedPost && (this.state.loadedPost.id !== +postId))) {
        axios.get(`/posts/${postId}`).then(
          response => {
            this.setState({loadedPost: response.data})
          }
        )
      }
    }
  }

  componentDidMount() {
    this.lodadData();
  }

  componentDidUpdate() {
    this.lodadData();
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
