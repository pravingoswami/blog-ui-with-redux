import React from 'react'

import aixos from 'axios'

import {Link} from 'react-router-dom'

import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";


function PostCard (props){

    return(
        <div>


                        <MDBRow >
                                    <MDBCol lg="7"  style = {{ margin :"0px", padding : "0px", width : "100%"}}  >
                                      <MDBView className="rounded z-depth-2 mb-lg-0 mb-4"hover waves  >
                                        <img
                                          className="img-fluid"
                                        //  src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                                         src={props.image}
                                          alt=""
                                        />
                                        <a href="#!">
                                          <MDBMask overlay="white-slight" />
                                        </a>
                                      </MDBView>
                                    </MDBCol>
                                    {/* <MDBCol lg="7" style = {{ margin :"0px", padding : "20px"}}  > */}
                                    <MDBCol lg="5"  >
                                      <a href="#!" className="success-text">
                                        <h6 className="font-weight-bold mb-3" >
                                          <MDBIcon icon="edit" className="pr-2" />
                                          Post
                                        </h6>
                                      </a>
                                      <h3 className="font-weight-bold mb-3 p-0">
        <strong>{props.post.title}</strong>
                                      </h3>
                                      <p>
                                        {props.post.body}
                                    </p>
                                      <p>
                                        {/* by
                                        <a href="#!">
                                          <strong>Carine Fox</strong>
                                        </a>
                                        , 19/08/2018 */}
                                        
                                        {/* <strong>{video.ceatedAt.slice(0, 10)}</strong> */}
                                      </p>

                                      {/* <Link to =  {`/${this.props.category}/${this.props.subsection}/${this.props.video}/${video._id}`} style = {{textDecoration : "none", color : "black"}}  >
                                      <MDBBtn color="success" size="md" className="waves-light " style = {{color : "black"}} >
                                      <strong> Watch Video</strong>
                                      </MDBBtn>
                                      </Link> */}

                                        <Link to = {`/posts/${props.post.id}`} ><MDBBtn color="primary" size="md" className="waves-light " >
                                      <strong> Read Post</strong>
                                      </MDBBtn></Link>
                                    </MDBCol>
                                  
                                  </MDBRow>
                                  <br></br>
                                    <br></br>
                                    <br></br>
          
        </div>
    )
}

export default PostCard