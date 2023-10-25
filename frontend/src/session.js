import React from "react";
import { Component } from "react";
import Perfil from "./perfil";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Session extends Component {

  constructor(props){
    super(props);
    this.state={
                 perfil:false,
                 username: '',
                 password:'',
                };
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleLogin(e) {
    const envio = this.state
    e.preventDefault();
    axios.post('http://localhost:5000/Rlogin/login',envio)
    .then (res => {
      alert(res.data)
       if(res.data==="Welcome Session")
       {
         this.setState({perfil:true}) 
       }
    })
    .catch(err => {console.error(err);});
  }

  render(){
    const perfil= this.state.perfil
    const { username } = this.state.username
    const { password } = this.state.password
    if(perfil){
      return <Perfil/>;
    }
    else{
     return(
      <div>
      <div class="container p-4">  
      <div class="row">
      <div class="col-md-4 mx-auto" >
      <div class="card">
    
    <h1 class="card-title">Session</h1>
    <div class="card-body">
      <form >     
      <p>
        <label > Username:
          <input type="text" class="form-control" value={username} onChange={(e) => this.setState({ username: e.target.value })}></input> 
        </label></p> <p>
          <label > Password:
           
          <input type="password"  class="form-control" value={password} onChange={(e) => this.setState({ password: e.target.value })}></input>
        </label></p>
          <input class="btn btn-outline-success" type="submit" value="Login" onClick={this.handleLogin}/>
     
      
        <a class="btn btn-outline-success" href="/">Return</a><p></p> </form>
      </div>
      </div> </div></div> </div>


      </div>
     )
    }
  }
}

export default Session;
