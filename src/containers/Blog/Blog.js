import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
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

                    <li><NavLink to='/' exact>Home</NavLink></li>
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

              <Route path='/' exact component={Posts} />
              <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;
