import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";


function Home(props){
    return(
        <div>
        <MDBView src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`} fixed>
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 class="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold" >Pravin <span className="indigo-text font-weight-bold">Goswami</span></h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">Full Stack Developer & Designer</h5>
                  <MDBBtn className="white btn-light-blue" size="lg">portfolio</MDBBtn>
                  <MDBBtn className="white btn-indigo" size="lg" >About me</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        </div>
    )
}

export default Home