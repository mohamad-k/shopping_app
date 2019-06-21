import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  addToCart, 
          getItems } from './actions/cartActions';
import {  MDBCard, 
          MDBCardBody, 
          MDBCardTitle, 
          MDBCardText, 
          MDBCol,  
          MDBView, 
          MDBBadge, 
          MDBFormInline, 
          MDBIcon } from 'mdbreact';

class Home extends Component{
  constructor(){
    super();
    this.state = { 
      search:""
     }
  }
  componentDidMount(){
    this.props.getItems()
    console.log(this.props.items)
    
  }
  infoClick = (id)=>{
    this.props.history.push("/product/"+id)
}

  handleClick = (id)=>{
    this.props.addToCart(id); 
  }
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    onChange=(e)=>{
      this.setState({search:e.target.value})
  }

    render(){
        const {allItems} = this.props
        const filterdProducts = allItems.filter( product => {
            return product.name.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1
          } )
        let itemList = filterdProducts.map(item=>{
            return(
              
              <MDBCol >
                <MDBCard style={{ width: "20rem" }}   className="cardStyle">
                  <MDBView hover zoom>
                    <img
                      src={"/images/"+item.image}
                      className="img-fluid m-auto p-3"
                      style={{height: '350px'}}
                      alt=""
                    />
                  </MDBView>
                  <MDBView hover zoom className="newProduct">
                    <img
                      src={"/images/"+item.new}
                      className="img-fluid"
                      alt=""
                    />
                  </MDBView>
                  <MDBCardBody>
                      <MDBCardTitle>
                      {item.name} 
                      </MDBCardTitle>
                      <MDBView hover zoom >
                        <img
                          src={"/images/"+item.logoMarkt}
                          style={{width: '50px'}}
                          className="img-fluid"
                          alt=""
                        />
                      </MDBView>
                      <MDBCardText>
                        <br/>
                        <h3>{item.desc}</h3>
                      </MDBCardText>
                      <MDBBadge
                          color="danger"
                          pill
                          style={{ marginBottom: "1rem" }} >
                          $
                      </MDBBadge>
                      <MDBBadge color="danger" pill className="priceBadge">
                          Price : {item.price}€
                      </MDBBadge>
                      <br /><br />
                      <MDBBadge pill color="primary" onClick={()=>this.infoClick(item._id)}>
                        <i class="fas fa-info-circle fa-2x"></i>
                      </MDBBadge>
                        <MDBBadge pill color="primary"  className="float-right" onClick={()=>{this.handleClick(item._id)}}>
                          <i class="fas fa-cart-arrow-down fa-2x"></i>
                        </MDBBadge>
                  </MDBCardBody>
                </MDBCard>
                <br />
            </MDBCol>
            )
          })

          return(
            <div className="container-fluid pb-5">
              <MDBCol md="8" className="m-auto">
                  <MDBFormInline className="md-form">
                    <MDBIcon icon="search" style={{fontSize: '1.5rem'}} />
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" style={{fontSize: '2rem'}} onChange={this.onChange}/>
                  </MDBFormInline>
              </MDBCol><hr/>
                  <div className="box mb-5 pb-5">
                      {itemList}
                  </div><br/><br/>
            </div>
        )
    }
}
// maping the state to props
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      allItems: state.allItems
    }
  }
  // maping Dispatch to props
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        getItems :()=> dispatch(getItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)