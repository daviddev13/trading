import React from "react";
import { Component } from "react";

import General from "./App";

import Tradelog from './tradelog.js';
import Lookoperations from './lookoperations.js';
import Comindicators from "./comindicators";

import TableMoneyLocator from "./tablemoneylocator";
import TableOtherMarkets from "./tableothermarkets";
import TableDollar from "./tabledollar";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

class Perfil extends Component {

  constructor(props){
    super();
    this.state={
      
      date:'',
      trend:'',

      perfilini:true,
      formindicators:false,
      formoperations:false,
      
      RevOperations:false,
      RevMoneyLocator:false,
      RevOtherMarkets:false,
      RevDollar:false,

      tradelog:[],
      moneylocator:[],
      othermarket:[],
      dollar:[],

      return:false
     };

     this.handleformindicators = this.handleformindicators.bind(this);
     this.handleformoperations = this.handleformoperations.bind(this);
     
     this.lookmoperations = this.lookoperations.bind(this);

     this.handleLookRegisOpera = this.handleLookRegisOpera.bind(this);

     this.todo = this.todo.bind(this);
     this.handlelookMoneylocator = this.handlelookMoneylocator.bind(this);
     this.handlelookothermarkets = this.handlelookothermarkets.bind(this);
     this.handlelookdollar = this.handlelookdollar.bind(this);


  };

  handleformindicators(e) {
    e.preventDefault();
    this.setState({formindicators:true}) 
  }

  handleformoperations() {
    this.setState({formoperations:true}) 
  }

  handleLookRegisOpera() {
    this.setState({RevOperations:true})  
  }

  lookoperations() {
    axios.get('http://localhost:5000/rperfil/tradelog')
      .then (res => {
         this.setState({tradelog: res.data});
      })
      .catch(err => {console.error(err);})
  }

  todo(){
    this.handleLookRegisOpera();
    this.lookoperations();
  }

  handlelookMoneylocator(){
    this.setState({RevMoneyLocator:true})
    //conseguir Tabla
    axios.get('http://localhost:5000/rperfil/moneylocator')
    .then (res => {
       this.setState({moneylocator: res.data});
    })
    .catch(err => {console.error(err);})
  }


  handlelookothermarkets(){
    this.setState({RevOtherMarkets:true})
                  
    axios.get('http://localhost:5000/rperfil/table2')
    .then (res => {
       this.setState({othermarket: res.data});
    })
    .catch(err => {console.error(err);})
    
  }

  handlelookdollar(){
    this.setState({RevDollar:true})
    axios.get('http://localhost:5000/rperfil/table3')
    .then (res => {
       this.setState({dollar: res.data});
    })
    .catch(err => {console.error(err);})
  }

  render(){
    const perfilini = this.state.perfilini
    const formindicators = this.state.formindicators
    const formoperations = this.state.formoperations

    const RevOperations = this.state.RevOperations
    const RevMoneyLocator = this.state.RevMoneyLocator
    const RevOtherMarkets= this.state.RevOtherMarkets
    const RevDollar = this.state.RevDollar
    
    if(perfilini){
      if(formindicators){
          return(<Comindicators atributo="true"></Comindicators>)
       }
      else{
         if(formoperations){
            return (<Tradelog atributo="true"></Tradelog>)
         }
         else{
            if(RevOperations){
                 return(<Lookoperations atributo="true" atributo2={this.state.tradelog}></Lookoperations>)
            }
            else{
              if(RevMoneyLocator){
                return (<TableMoneyLocator atributo="true" atributo2={this.state.moneylocator}></TableMoneyLocator>)
              }
              else{
                if(RevOtherMarkets){
                  return (<TableOtherMarkets atributo="true" atributo2={this.state.othermarket}></TableOtherMarkets>)
                } 
                else{
                  if(RevDollar){
                    return (<TableDollar atributo="true" atributo2={this.state.dollar}></TableDollar>)
                  } 
                  else{
                    return (
                      <div>
                      <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
             <div class="container"> 
             <h2 class="navbar-brand">Control-Investment</h2>   
                <form class="form-inline">
                  <Link class="btn btn-outline-success" to="/">Logout</Link>
                </form></div>  
            </nav>
                      
                     
                    <div>
                       <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">FORMS</th> 
                              <th scope="col">VIEWS</th>    
                           </tr>
                          </thead> 
                          <tbody>
                             <tr>
                               <td width="2" style={{padding: "2px"}}> 
                                 <button  onClick={this.handleformindicators}>Indicators</button>
                               </td>
                               <td width="2" style={{padding: "10px"}}>
                                  <button  onClick={this.handlelookMoneylocator}>Money_Locator</button>
                                  <button  onClick={this.handlelookothermarkets}>Other_Markets</button>
                                  <button  onClick={this.handlelookdollar}>Dollar_table</button>
                               </td>
                             </tr>
                             <tr>
                                <td width="2">
                                  <button onClick={this.handleformoperations}>Trade Log</button>
                                </td>
                                <td width="2" style={{padding: "10px"}}>
                                  <button onClick={this.todo}>Operations</button>
                                </td>
                             </tr>
                            </tbody>
                       </table>
                   </div>
                      <div>
                      
                      </div>
                      <div>
                      
                      </div>
                      
                      
                   </div> 
                      );
                  }
                }

              }





            
             }
         }
       }
   }
   else{
     return <General></General>      
   }
  }
}
  
export default Perfil;
