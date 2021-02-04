import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Posts from './Posts/Posts';
import './Blog.css';

// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'
// Loads async
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost')
})

class Blog extends Component {
  state = {
    auth: true
  }

    render () {
        return (
            <div className='Blog'>
              <header>
                <nav>
                  <ul>
                    {/* // To set a custom active class
                    <li><NavLink activeClassName='my-active' to='/' exact>Home</NavLink></li> */}

                    {/* // To set active inline style
                    <li><NavLink activeStyle={{
                      color: 'red',
                      textDecoration: 'underline' }} to='/' exact>Home</NavLink></li> */}

                    <li><NavLink to='/' exact>Posts</NavLink></li>
                    <li><NavLink to={{
                        // pathname: this.props.match.url + '/new-post', // Use this to build a relative path
                        pathname: '/new-post', // This is an absolute path
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                  </ul>
                </nav>
              </header>

              {/* <Route path='/' exact render={() => <h1>Home</h1>} />
              <Route path='/' render={() => <h1>Home 2</h1>} /> */}

              {/* // The order of the rouetes is important, in this case if the url
                    is /1 it could enter also into /new-post, that's why we set /new-post first */}
              <Switch>
                {
                  this.state.auth ?
                    // <Route path='/new-post' component={NewPost} />
                    // Loads async
                    <Route path='/new-post' component={AsyncNewPost} />
                  :
                    null
                }
                <Route path='/posts' component={Posts} />
                {/* To catch unknown paths, it does not work with route '/'
                because route '/' catchs everything */}
                {/* <Route render={() => {
                  return <h1>Not found</h1>
                }} /> */}

                {/* <Redirect from='/' to='/posts' /> */}
                {/* <Route path='/' component={Posts} /> */}
              </Switch>
            </div>
        );
    }
}

export default Blog;
