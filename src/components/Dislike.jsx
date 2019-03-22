import React,{ Component } from "react";
import Button from "./Button";

class Dislike extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
        dislikes: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
   
    this.setState((prev)=>{
      
      this.props.click(this.state.dislikes)

      return {
        dislikes: !prev.dislikes
      }
    })

  }

  render(){
    let style = !this.state.dislikes ? { color: 'black' } : {color : 'red',};

    return(
    <Button class="btn btnLike" style={style}   click={this.clickHandler}>Dislike</Button> 
    ) 

  }

}

export default Dislike;