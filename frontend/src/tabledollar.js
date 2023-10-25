import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Perfil from './perfil.js';
import './App.css';

class TableDollar extends Component {

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
        axios.delete(`http://localhost:5000/rperfil/table3/${id}`)
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
         <div class="col-md-6 mx-auto" >
        <table class="table table-bordered">
               <thead>
                 <tr>
             <th scope="col">Date</th> 
               <th scope="col">Day</th>  
                <th scope="col">Week</th> 
                 <th scope="col">USD/pesos</th>
                 <th scope="col">Colcap</th> 
                 <th scope="col">Wtic</th> 
                 <th scope="col">DollarIndex</th> 
                 <th scope="col">Observations</th>
                 </tr>
               </thead>
            {
               this.props.atributo2.map((dato) =>
                <tbody>
         <tr>
          <td> {dato.Date}</td>
          <td> {dato.trendDollarDay}</td>
          <td> {dato.trendDollarWe}</td>
          <td>{dato.USDCOP_en_pesos}</td>
          <td>{dato.trendColcap}</td>
          <td>{dato.WTIC}</td>
          <td>{dato.Forex}</td>
          <td> {dato.Coment_Dollar}</td>
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
  
          
      </div>
        );
      }
      else{
        if(returnPerfil)
        { 
          return(<Perfil/>)
        }
        else{
return (
        <div>

            <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
             <div class="container"> 
             <h2 class="navbar-brand">Dollar (USD/COP)</h2>   
                <form class="form-inline">
                   <a class="btn btn-outline-success" href="/">Return</a>
                </form>
              </div>  
            </nav>

      <div className="container"> 
       <div class="col-md-4 mx-auto" >
         <div class="card" >   
            <div class="card-body">
              <li>Day = USD/COP daily chart </li>
              <li>Week = USD/COP weekly chart </li>
               To look the charts visit <a href="https://es.investing.com/currencies/usd-cop">Investing.com</a> 
            </div>
        </div>    
      </div>
      </div>

      <div className="container"> 
       <div class="col-md-6 mx-auto" >
      <table class="table table-bordered">
             <thead>
               <tr>
           <th scope="col">Date</th> 
             <th scope="col">Day</th>  
              <th scope="col">Week</th> 
               <th scope="col">USD/pesos</th>
               <th scope="col">Colcap</th> 
               <th scope="col">Wtic</th> 
               <th scope="col">DollarIndex</th> 
               <th scope="col">Observations</th>
               </tr>
             </thead>
          {
             this.props.atributo2.map((dato) =>
              <tbody>
       <tr>
        <td > {dato.Date}</td>
        <td className={this.getCellStyle2(dato.trendDollarDay)}> {dato.trendDollarDay}</td>
        <td className={this.getCellStyle2(dato.trendDollarWe)}> {dato.trendDollarWe}</td>
        <td>{dato.USDCOP_en_pesos}</td>
        <td className={this.getCellStyle2(dato.trendColcap)}>{dato.trendColcap}</td>
        <td className={this.getCellStyle2(dato.WTIC)}>{dato.WTIC}</td>
        <td className={this.getCellStyle2(dato.Forex)}>{dato.Forex}</td>
        <td> {dato.Coment_Dollar}</td>
      </tr>
      </tbody> 
             )
          }   
          </table>
      </div>
      </div> 
      <p></p>
            <a href="/">Retornar</a> 
    </div>
      );
        }
      }      
    }
       
}

export default TableDollar;