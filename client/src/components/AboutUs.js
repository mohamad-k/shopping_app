import React from 'react';
import { MDBCard,  MDBCardTitle,  MDBCol, MDBRow,  MDBCardImage } from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom" 
import JumbotronPage from "./JumbotronPage"

import AhmadS from './Personal_Pics/ahmad.jpg'
import Mohammed from './Personal_Pics/mohammed.jpg'
import Zoya from './Personal_Pics/zoya.jpg'
import Zoyab from './Personal_Pics/zoyab.jpeg'

import "../aboutUs.css"

const AboutTest = props => {
return (
<Router>
    <JumbotronPage />
    <div className="text-center ">
        <div className="row m-auto ">
            <div className="col-md-4 p-4 ">
                <div class="containerCard">
                    <div className="image">
                        <MDBCard className="p-3">
                        <MDBCardTitle><b>AHMAD ALKWIFI</b></MDBCardTitle>
                            <MDBCardImage className="img-fluid imageFront" src={AhmadS} waves />
                        </MDBCard>
                    </div>
                    <div class="overlayCard">
                        <div className="text">
                        <h3 className="text-primary  pt-3">Web Developer <br /> Ahmad Alkwifi</h3>
                        <hr />
                        <h4>UX / UI Designer & Frontend </h4>
                        <hr />
                        <div>
                            <a href="https://www.xing.com/profile/Ahmad_Alkwifi/cv" className="p-4 xing"><i class="fab fa-xing"></i></a>
                            <a href="https://alkwifiahmad.github.io/github.io/" className="p-4 github"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ahmad-alkwifi/" className="p-4 linkedin"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <MDBRow className="imageRounded">
                        <MDBCol>
                            <img src={AhmadS} className="rounded-circle mx-auto d-block w-25 imageRoundedBorder" alt="aligment" />
                        </MDBCol>
                        </MDBRow>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 m-auto p-4">
            <div class="containerCard">
                <div className="image">
                    <MDBCard className="p-3">
                    <MDBCardTitle><b>MOHAMMED HAWARI</b></MDBCardTitle>
                        <MDBCardImage className="img-fluid imageFront" src={Mohammed} waves />
                    </MDBCard>
                </div>
                <div class="overlayCard">
                    <div class="text">
                        <h3 className="text-primary  pt-3">Web Developer <br /> Mohammed Hawari</h3>
                        <hr />
                        <h4>Full-Stack Web-Development</h4>
                        <hr />
                        <div>
                            <a href="https://www.xing.com/profile/mohammed_hawari2/cv" className="p-4 xing"><i class="fab fa-xing"></i></a>
                            <a href="https://github.com/mohamad-k" className="p-4 github"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/mohammed-hawari-45831a182/" className="p-4 linkedin"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <MDBRow className="imageRounded">
                        <MDBCol>
                            <img src={Mohammed} className="rounded-circle mx-auto d-block w-25 imageRoundedBorder" alt="aligment" />
                        </MDBCol>
                        </MDBRow>
                    
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 m-auto p-4">
                <div class="containerCard">
                    <div className="image">
                        <MDBCard className="p-3">
                        <MDBCardTitle><b>ZOYA EBRAHIMI</b></MDBCardTitle>
                            <MDBCardImage className="img-fluid imageFront" src={Zoya} waves />
                        </MDBCard>
                    </div>
                    <div class="overlayCard">
                        <div class="text">
                            <h3 className="text-primary  pt-3">Web Developer <br /> Zoya Ebrahimi</h3>
                            <hr />
                            <h4>Project Manager & Frontend</h4>
                            <hr />
                            <div>
                                <a href="https://www.xing.com/profile/Zoya_Ebrahimi/cv" className="p-4 xing"><i class="fab fa-xing"></i></a>
                                <a href="https://github.com/ZoyaEbrahimi/" className="p-4 github"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/zoya-ebrahimi-7b3899164/" className="p-4 linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <MDBRow className="imageRounded">
                            <MDBCol>
                                <img src={Zoyab} className="rounded-circle mx-auto d-block w-25 imageRoundedBorder" alt="aligment" />
                            </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bFooter"/>
</Router>
);
};

export default AboutTest;