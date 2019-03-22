import React,{ Component } from "react";
import Button from "./Button";

class DislikeButton extends Component{
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
    // let style = !this.state.liked ? { color: 'black' } : {color : 'white',};

    return(
    <Button class="btn btnLike"  click={this.clickHandler}>Dislike</Button> 
    ) 

  }

}

export default DislikeButton;