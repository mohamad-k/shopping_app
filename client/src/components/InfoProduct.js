import React from 'react';
import {connect} from "react-redux"
import {  MDBBtn, 
          MDBCard, 
          MDBCardBody, 
          MDBCardImage, 
          MDBCardTitle, 
          MDBCardText, 
          MDBCol,  
          MDBRow, 
          MDBBadge } from 'mdbreact';
import axios from "axios"
import {addToCart} from "./actions/cartActions";
import StarRate from './StarRatings'
import HertRed from './HertRed'

class InfoProduct extends React.Component{
  state = {
    product : {}
    }
    handleClick = (id)=>{
        this.props.addToCart(id); 
        this.props.history.push("/cart")
    }
    componentDidMount(){
        const {id} = this.props.match.params
        axios.get(`/product/${id}`).then(res => this.setState({
          product: res.data.express
        }))
      }
    render(){
        let product = this.state.product

      return (
        <div className="infoCart mt-5 ml-auto mr-auto">
          <MDBCol>
            <MDBCard className="w-100">
              <MDBRow>
              <MDBCol className=" m-auto">
                <MDBCardImage className="img-fluid  infoImage" src={'/images/'+ product.image} waves />
              </MDBCol>
              <MDBCol >
                  <MDBCardBody>
                    <MDBCardTitle><h1><b>{product.name}</b></h1> <img src={'/images/'+product.logoMarkt} alt="logo" style={{width: '10rem'}} /></MDBCardTitle>
                    <hr /><hr />
                    <MDBCardText>
                      <h3>{product.desc}</h3>
                    </MDBCardText>
                    <MDBCardText>
                      <p className="desc">{product.info}{product.info}</p>
                    </MDBCardText>
                    <MDBBtn href="/cart">Go to Cart</MDBBtn>
                    <MDBBtn color="danger" href="/">Back To Shopping</MDBBtn>
                    <MDBBadge pill color="primary"  className="float-right" onClick={()=>{this.handleClick(this.state.product._id)}}><i class="fas fa-cart-arrow-down fa-2x"></i></MDBBadge>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
                <hr />
              <div className="d-flex justify-content-around">
                <HertRed />
                <StarRate />
              </div>
            </MDBCard>
          </MDBCol>
        </div>
      )}
}
// maping Dispatch to props
const mapDispatchToProps = (dispatch)=>{
  return { 
    addToCart:(id)=> {  dispatch(addToCart(id))  }

  }
}
export default connect(null, mapDispatchToProps)(InfoProduct);