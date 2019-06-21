import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom'


const FooterPage = () => {
  return (
      <Router>
        <MDBFooter color="special-color"  className="fixed-bottom footer-min">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <p className="title text-center">Ahmad Alkwifi</p>
                <p className="text-center"><a href="https://www.xing.com/profile/Ahmad_Alkwifi/cv" className="p-2 xing"><i class="fab fa-xing"></i></a>
                <a href="https://alkwifiahmad.github.io/github.io/" className="p-2 github"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ahmad-alkwifi/" className="p-2 linkedin"><i class="fab fa-linkedin-in"></i></a></p>
              </MDBCol>
              <MDBCol md="4" style={{borderLeft: '1px solid white'}}>
                <p className="title text-center">Mohammed Hawari</p>
                <p className="text-center">
                <a href="https://www.xing.com/profile/mohammed_hawari2/cv" className="p-2 xing"><i class="fab fa-xing"></i></a>
                <a href="https://github.com/mohamad-k" className="p-2 github"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mohammed-hawari-45831a182/" className="p-2 linkedin"><i class="fab fa-linkedin-in"></i></a> 
                </p>
              </MDBCol>
              <MDBCol md="4" style={{borderLeft: '1px solid white'}}>
                <p className="title text-center">Zoya Ebrahimi</p>
                <p className="text-center">
                <a href="https://www.xing.com/profile/Zoya_Ebrahimi/cv" className="p-2 xing"><i class="fab fa-xing"></i></a>
                <a href="https://github.com/ZoyaEbrahimi/" className="p-2 github"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/zoya-ebrahimi-7b3899164/" className="p-2 linkedin"><i class="fab fa-linkedin-in"></i></a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="/aboutus"> MAZ.Co</a>
            </MDBContainer>
          </div>
      </MDBFooter>
    </Router>
  );
}

export default FooterPage;