import React from "react";
import {  MDBJumbotron, 
          MDBRow, 
          MDBCol, 
          MDBCardTitle } from "mdbreact";


const JumbotronPage = () => {
  return (
    <div  style={{width:"95%", margin:"auto"}}>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4" 
                    style={{ backgroundImage: `url(https://cdn1.neolith.com/wp-content/uploads/wp-imk/colecciones/iron/iron-grey/despiece/iron-grey.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  <h1>
                    <b>OUR WEB DEVELOPERS & DESIGNERS TEAM</b>
                  </h1> 
                </MDBCardTitle>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default JumbotronPage;