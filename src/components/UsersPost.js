import React from 'react'
import {connect} from 'react-redux'
import PostCard from './PostCard'


import { ListGroup, ListGroupItem, Container } from 'reactstrap';


function UsersPost (props) {
    return(
        <Container>
           <br></br>{console.log(props.posts)}
                <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} >{props.user && props.user.name}'s Posts </h1>                  
                <br></br>                 
                <br></br> 
                {
                    props.posts && props.posts.map(post => {
                        return (
                            <PostCard post = {post}/>
                        )
                    })
                }   

                <div>
                    
                </div>
        </Container>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user : state.user.find(user => user.id == props.match.params.userId),
        posts : state.posts.filter(post => post.userId == props.match.params.userId)
    }
}

export default connect(mapStateToProps)(UsersPost)