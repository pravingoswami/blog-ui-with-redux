import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Profile from './UserProfile'



function PostsList (props) {

    return(
        <div>
            <div>
                <Container>
                <br></br>
                <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} > Users List</h1>                  
                <br></br>                 
                <br></br>                 
                <ListGroup flush>
                    {
                      props.users.map(user => {
                            return(
                                <ListGroupItem  style = {{backgroundColor : "#202124"}} ><Link to = {`/users/${user.id}`} style = {{color : "white"}} > <Profile id = {user.id} name = {user.name} email = {user.email} /> </Link> </ListGroupItem>
                            )
                        })
                    }

                </ListGroup>
                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.user,
    }
}

export default connect(mapStateToProps)(PostsList)