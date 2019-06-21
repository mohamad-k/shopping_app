import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

class Recipe extends Component{ 

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        return(
            <div className="container w-100 pb-5 mb-5">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6€)</span>
                            </label>
                    </li>
                    <li className="collection-item">
                        <b>Total: {this.props.total} €</b>
                    </li>
                </div>
                <div className="checkout">
                        <button className="waves-effect waves-light btn">BUY</button>
                </div>
                <div>
                    <Link to="/" >
                        <button className="waves-effect waves-light btn btn-danger ">Back to Shopping</button>
                    </Link>
                </div><br/><br/><br/>
            </div>
        )
    }
}
// maping the state to props
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}
// maping Dispatch to props
const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
