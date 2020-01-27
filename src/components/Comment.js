import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'reactstrap';


function Comment(props){
    return(
        <div>
              <Container>
                        <img src = "https://media.ttmind.com/Media/tech/article_51_7-18-20181-15-10PM.jpg" style = {{height : "50px", width : "50px", borderRadius : "50%", float : "left", display : "bloack", marginRight : "50px", border : '1px solid black'}}  ></img>
                        <div style = {{float : "left", display : "block", width : "900px", margin : '0px'}} >
                        <h1>{props.comment.name}</h1>
                            <p>{props.comment.body}</p>
                        </div>
                        </Container> 
                        <div style = {{clear : ""}} >
                    </div>
        </div>
    )
}

export default Comment