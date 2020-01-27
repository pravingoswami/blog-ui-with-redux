import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Comment from './Comment'
import Profile from './UserProfile'



function PostShow(props) {
 return(
    <div>
    <Container>
                  
    <br></br>  


                    <br></br>{console.log(props.user)}
                  {
                      props.user &&   <Link to = {`/users/${props.user.id}`}   style = {{color : "white"}} ><Profile name = {props.user.name} email = {props.user.email} /></Link>
                  }

                        
                <br></br> 
                <img src={props.image} className="img" alt="" style = {{width : "100%"}} />
                <br></br>
                <br></br>
                <h1 className="display-6" style = {{fontWeight : "600"}} > {props.post && props.post.title}</h1> 
                <h5>{props.post && props.post.body}</h5>   
                <br></br>              
                <br></br>              
                <h1 className="display-5" style = {{textAlign : "center", fontWeight : "600"}} >Comments</h1> 
                <br></br>      
                <br></br> 
                <div>
                    {
                        props.comments && props.comments.map(com => {
                            return (
                                <Comment comment = {com}/>
                            )
                        })
                    }
                </div>  
               
                <br></br>        
                <br></br>        
                <br></br> 
                
               
    </Container>
          
</div>
 )
}

const mapStateToProps = (state, props) => {
    let user = {}, image = ''
    const post = state.posts.find(post => post.id == props.match.params.postId)
        if(post){
             user = state.user.find(user => user.id == post.userId)
             const images = state.images.map(image => image.download_url)
             image = images[post.id-1]
             console.log(image)
        }
    // 
    return {
        post : post ,
        user : user,
        image : image,
        comments : state.comments.filter(comment => comment.postId == props.match.params.postId)
    }
}


export default connect(mapStateToProps)(PostShow)
