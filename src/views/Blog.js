import React, { Component } from 'react';
import Blog_post from '../components/Blog_post';


export default class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-blog.herokuapp.com//blog/posts')
            .then(res => res.json())
            .then(data => this.setState({
                posts:data
            }))
    }

    render() {
        return (
            <div className='position-absolute top-50 start-50 translate-middle mt-5'>
                <h4 className='text-center mb-4'>Blog posts</h4>
                <div className='row'>
                    {this.state.posts.map(p => <Blog_post post={p} key={p.id} />)}
                </div>
            </div>
        );
    }
}