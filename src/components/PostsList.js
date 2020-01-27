import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";


import PostCard from './PostCard'



function PostsList (props) {
    return(
        <div>
            <div>
                <Container>
                    <br></br>
                <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} > Posts List</h1>                  
                <br></br>                 
                <br></br> 
                   
                    {
                        props.posts.map((post, i) => {
                            // console.log(props.images[i])
                            return(
                                <PostCard post = {post} image = {props.images[i]} />
                            )
                        })
                    }
            
                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts,
        images : state.images.map(image => image.download_url)
    }
}

export default connect(mapStateToProps)(PostsList)