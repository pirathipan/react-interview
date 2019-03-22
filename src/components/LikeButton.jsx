import React,{ Component } from "react";
import Button from "./Button";

class LikeButton extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      liked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
   
    this.setState((prev)=>{
      
      this.props.click(this.state.liked)

      return {
        liked: !prev.liked
      }
    })

  }

  render(){
    let style = !this.state.liked ? { color: 'black' } : {color : 'blue',};

    return(
      <Button class="btn btnLike" style={style}  click={this.clickHandler}>Like</Button> 
    ) 

  }

}

export default LikeButton;