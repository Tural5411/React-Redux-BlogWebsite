import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/deleteAction';


class Post extends Component {
    handleClick = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        const post =this.props.post ? (
            <div  className="post">
                <p>{this.props.post.id}</p>
                {this.props.post.title}
                <p> {this.props.post.body} </p>
                <div className="center">
                    <button onClick={this.handleClick} className="btn red">DELETE POST</button>
                </div>
            </div>
        ) : (
            <div className="center">
            There is not item</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
 let id=ownProps.match.params.post_id;  
 return{
     post:state.posts.find(post=>post.id===id)
 }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost:(id)=>dispatch(deletePost(id))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Post);