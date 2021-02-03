import React, { Component } from 'react';
import axios from '../../../axios' //axios instance
import Post from '../../../components/Post/Post'
import { Link, Route } from 'react-router-dom'
import './Posts.css'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {

  state = {
    posts: []
  }

  postSelectdHandler = (id) => {
    // this.setState({selectedPostId: id})
    // console.log('======= id', id)
    this.props.history.push({pathname: '/posts/' + id})
  }

  componentDidMount() {
    axios.get('/posts').then(
      response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map( post => {
          return {
            ...post,
            author: 'Max'
          }
        })
        this.setState({posts: updatedPosts})
      }
    ).catch(
      error => {
        console.log(error)
        // this.setState({error: true})
      }
    )
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>

    if(!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link key={post.id} to={'/' + post.id }>
            <Post
              key={post.id}
              title={post.title} author={post.author}
              clicked={() => this.postSelectdHandler(post.id)} />
          // </Link>
        )
      })
    }

    return (
      <div>
        <section className="Posts">
          { posts }
        </section>

        <Route path='/posts/:postId' exact component={FullPost} />
      </div>
    )
  }
}

export default Posts;
