import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import logo from '.../../../public/images/logo.png';
import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse } from "mdbreact";


class Navbar extends React.Component{
    state = {
        isOpen: false
      };
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
            <MDBNavbar color="special-color" light expand="md">
              <MDBNavbarBrand>
                <strong className="white-text"><Link to="/" className="brand-logo"><img src={logo} style={{width: '50px'}} alt='aaa'/></Link></strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink><Link to="/" className="text-light"><b>HOME</b></Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                      <MDBNavLink to="#!"><Link to="/cart"className="text-light"><b>MY CART</b></Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink><Link to="/aboutus" className="text-light"><b>ABOUT US</b></Link></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                        <Link to="/cart"> <div className="cartNumperNavbar text-center text-danger"><h2><b>{this.props.addedItems.length}</b></h2></div><i class="fas fa-shopping-cart fa-2x text-light"></i></Link>
                  </MDBNavItem> 
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          );
        }
      }
      
// maping the state to props
const mapStateToProps = (state)=>{
  return {addedItems: state.addedItems}
}

export default connect(mapStateToProps, null)(Navbar);