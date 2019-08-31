import React, { Component } from 'react';

interface IProps {
  // [propname:string]:any;
  name: string;
  age: number;
}

interface Istate {
  name:string;
  age:number;
  [key: string]: number | string
}
// const Form: React.FC<IProps> = (props:IProps) => {
//   return (
//           <div>
//             Form
//             {props.name + props.age}
//           </div>
//   );
// }
class Form  extends Component<IProps, Istate> {
  // constructor() {
  //   super();
  //   this.state = {
  //     name:1
  //   }
  // }
    state:Istate = {
      age: 11,
      name:'caonima',
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      console.log(e.currentTarget);
      const { name, value } = e.currentTarget;
      this.setState({
        [name]:value
      })
    }
    render() {
      console.log(this);
        return (
          <div>
            {this.props.name}
            {this.props.age}
            {this.state.age}
            <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
            <input type="text" name='age' onChange={this.handleChange} value={this.state.age}/>
          </div>
        );
      }
}
export default Form;