import React from 'react';
import './App.css';
import { Add } from './components/Add'
import { News } from './components/News'
//import newsData from './data/newsData'

    
class App extends React.Component{
  state = {
    headerText:'SampleText',
  }

  aFunc = (e) => { this.setState({headerText:e})};
 
  render(){
    const {headerText} = this.state;
    return(
      <React.Fragment>
        <C text= {headerText}/>
        <B bbFunc = {this.aFunc}/>
      </React.Fragment>
    );
  }
}
class B extends React.Component{
  state = {
    headerText:'Hello, its me',
  }
  bFunc = (e) => { this.setState({headerText:e})};
  render(){
    return(
      <div>
        <button className = 'btn' onClick={()=>{this.props.bbFunc(this.state.headerText)}}>Apply</button>
        <D dFunc ={this.bFunc}/>
      </div>
      
    );
  }
}

class D extends React.Component{
 
  handleChange = (e)=>{
    const {value} = e.currentTarget;

    this.props.dFunc(value);
  }
  render(){
      return(
     
        <input
                className = "textfield"
                type='text'
                onChange={this.handleChange}
                placeholder='Введите текст'
                />
      )

  }
}

class C extends React.Component{
 
  render(){
    
    return(
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
export default App;
