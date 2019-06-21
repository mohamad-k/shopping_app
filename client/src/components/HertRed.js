import React from 'react';

const white = 'grey';
const red = 'red';

class HertRed extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: white };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color === white ? red : white;
    this.setState({ color: newColor })
  }
  render(){
    return(
      <div >
        <i class="fas fa-heart fa-3x" style={{color: this.state.color}} onClick={this.changeColor}></i>
      </div>
    )
  }
}

export default HertRed;