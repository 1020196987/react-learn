import React, { Component } from "react";

class MYButton extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log("click");
  };
  handleSelectChange = (e) => {
    console.log(e.target);
  };
  render() {
    let fn = (element) => {
      console.log(element)
    }
    return (
      <>
      {
        [1, 2, 3, 4].map((item ,index) => (
          <input type="checkbox" value={item} ref={fn}/>
        ))
      }
        
        {/* <div>button</div>
        <p onClick={this.handleClick}>点击</p>

        <select name="" id="" onChange={(e) => this.handleSelectChange(e)}>
          <option value="">aa</option>
          <option value="">bb</option>
          <option value="">cc</option>
        </select> */}
      </>
    );
  }
}
export default MYButton;
