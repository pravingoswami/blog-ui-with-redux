import React from 'react'
import {Media, Container } from 'reactstrap';
import axios from 'axios'

class Profile extends React.Component{


    render(){
        return(
            <div>
                <Container>
                    <div>
                        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkzDwfk3ig8rqsXgDvmWJX7N-DcCzEyzdVUCrNMRwr7OP5tayd" style = {{height : "100px", width : "100px", borderRadius : "50%", float : "left", display : "bloack", marginRight : "50px"}}  ></img>
                        </div>
                        <div style = {{float : "left", display : "block"}} >
                        <h1>{this.props.name}</h1>
                            <p>{this.props.email}</p>
                        </div>
                        </Container> 
                        <div style = {{clear : "both"}} >

                    </div>
            </div>

        )
    }

}

export default Profile