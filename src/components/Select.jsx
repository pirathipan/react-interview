import React,{Component} from "react";

class Select extends Component{

  constructor(props)
  {
    super(props)
    this.Change = this.Change.bind(this);
  }

  Change(category){
    var options = category.target.options;
    var values = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    this.props.onChange(values);
  }

  render()
  {
      return <select onChange={this.Change}  className="select" multiple>
        {this.props.categories.map((category,index)=>{
          return <option key={index} value={category}>{category}</option>          
        })}
      </select>
  }

}

export default Select;