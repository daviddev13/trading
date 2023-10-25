import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Perfil from './perfil.js';
import './App.css';

class TableOtherMarkets extends Component {

    constructor (props) {
        super();
        this.state={
          lookFromSession:props.atributo,
          returnPerfil:false
        } 
        this.handleLogoutlo = this.handleLogoutlo.bind(this);
        this.eliminarDato = this.eliminarDato.bind(this);
        this.getCellStyle2 = this.getCellStyle2.bind(this);
      }

      getCellStyle2(category) {
        if (category === 'Bear') {
          return 'rojo';
        } else if (category === 'Bull') {
          return 'verde';
        } else {
          return 'gris'; // Para Flat o cualquier otro valor
        }
      }

      handleLogoutlo() {
        this.setState({lookFromSession:false})
        this.setState({returnPerfil:true})
      }

      eliminarDato(id) { 
        //console.log(id)
        axios.delete(`http://localhost:5000/rperfil/table2/${id}`)
          .then (res => {
            alert(res.data.message);
            this.updateTable();
          })
          .catch(err => {console.error(err);})
      }

    render () { 

      const lookFromSession=this.state.lookFromSession
      const returnPerfil=this.state.returnPerfil

      if(lookFromSession)
      {
        return (

          <div>    
            <button onClick={this.handleLogoutlo}>Logout</button>
            <div className="container">      
              <div class="col-md-6 mx-auto">
                <table class="table table-bordered">
            <thead>
               <tr>
               <th scope="col">Id</th>
           <th scope="col">Date</th> 
            <th scope="col">BTC</th> 
            <th scope="col">Gold</th>
             <th scope="col">WTIC</th> 
             <th scope="col">Observations</th>
               </tr>
             </thead>
          {
             this.props.atributo2.map((dato) =>
            <tbody>
             <tr>
             <td> {dato.ID}</td>
              <td> {dato.Date}</td>
              <td> {dato.BTC}</td>
              <td> {dato.Gold}</td>
              <td> {dato.WTIC}</td>
              <td> {dato.Coment_OtherMarkets}</td>
              <td width="112" height="25">
          {/* Agregar un botón o enlace para eliminar el dato */}
          <button onClick={() => this.eliminarDato(dato.ID)}>Eliminar</button>
        </td>
            </tr>
            </tbody>     
             )
          }   
                </table>
              </div>
            </div>
  
          <p></p>
        
          </div>
                  )
      }
      else 
      {
        if(returnPerfil)
        { 
          return(<Perfil/>)
        }
        else
        {
 return (

        <div> 
                       
            <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
             <div class="container"> 
             <h2 class="navbar-brand">Other Markets</h2>   
                <form class="form-inline">
                   <a class="btn btn-outline-success" href="/">Return</a>
                </form>
              </div>  
            </nav>

          <div className="container">            
           <div class="col-md-6 mx-auto" >
             <div class="card">   
                <div class="card-body">
                <li>BTC = $NYXBT   = Nyse Bitocoin Index  </li>
                 <li>Gold  = $GOLD = Gold Continuous Contracts</li>
                 <li>Wtic    = $WTIC    = Light crude oil Continuous Contracts   </li>
                 To look the charts visit <a href="https://stockcharts.com">stockcharts</a> 
                </div>
            </div>    
          </div>
          </div>



          <div className="container">      
            <div class="col-md-6 mx-auto">
              <table class="table table-bordered">
          <thead>
             <tr>
         <th scope="col">Date</th>  <th scope="col">BTC</th> <th scope="col">Gold</th> <th scope="col">WTIC</th> <th scope="col">Observations</th>
             </tr>
           </thead>
        {
           this.props.atributo2.map((dato) =>
          <tbody>
           <tr>
            <td> {dato.Date}</td>
            <td className={this.getCellStyle2(dato.BTC)}> {dato.BTC}</td>
            <td className={this.getCellStyle2(dato.Gold)}> {dato.Gold}</td>
            <td className={this.getCellStyle2(dato.WTIC)}> {dato.WTIC}</td>
            <td> {dato.Coment_OtherMarkets}</td>
          </tr>
          </tbody>     
           )
        }   
              </table>
            </div>
          </div>

        <p></p>
        <a href="/">Return to Home</a>
        </div>
                )
        }
      }      
   }
 }

export default TableOtherMarkets;