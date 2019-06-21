import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class StarRate extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    alert('Thanks for your feedback !!')
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div style={{fontSize: '2rem'}}>
        <h3>Rate This Product {rating}</h3>
        <StarRatingComponent 
          name="rate1"
          starColor={'red'}
          starCount={10} 
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarRate;
 