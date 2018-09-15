import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      form:[]
    }

  }
  addForm = () => {
    let form = Object.assign([],this.state.form);
    form.push({
      itemName:'TextField',
      value:''
    })
    this.setState({form})
  }
  changeFormValue = (index,e) => {
    let form = Object.assign([],this.state.form);
    form[index].value = e.target.value;
    this.setState({
      form
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.form.map((item,index)=>{
          return (
            <div>
              <input key={index} value={item.value} onChange={(e)=>{this.changeFormValue(index,e)}} title={`This is Title input | ${index}`}></input>
              
              <br/>
            </div>
          )
        })}  
        <button onClick={()=>{this.addForm()}}>Add Forms</button>     
      </div>
    );
  }
}

export default App;
