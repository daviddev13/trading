import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Perfil from './perfil.js';

class Lookoperations extends Component {

    constructor (props) {
        super();
        this.state={
          lookoperationsopen:props.atributo,
          
        } 
        this.handleLogoutlo = this.handleLogoutlo.bind(this);
      }

    handleLogoutlo() {
        
        this.setState({lookoperationsopen:false})
      }

    render () { 

      const lookoperationsopen=this.state.lookoperationsopen
      
      if(lookoperationsopen){
      return (

        <div>
        <h2>Operations</h2>
        
        <table class="table table-responsive"> 
           <thead>
         <tr>
           <th>ID </th>
           <th>Date</th>
           <th>CFD</th>
           <th>Riesgo</th>
           <th>Tipo</th>
           <th>Ten_Mayor</th>
           <th>IN</th>
           <th>OUT</th>
           <th>Valor</th>
           <th>Observations</th>
        </tr>
        </thead>
      {this.props.atributo2.map((fflecha) =>      
        <tbody>
          <tr>
            <td>{fflecha.identificador}</td>
            <td>{fflecha.date}</td>
            <td>{fflecha.cfd}</td>
            <td>{fflecha.riesgo}</td>
            <td>{fflecha.operacion}</td>
            <td>{fflecha.tendencia_mayor}</td>
            <td>{fflecha.entrada}</td>
            <td>{fflecha.salida}</td>
            <td>{fflecha.valor}</td>
            <td>{fflecha.observaciones}</td>
          </tr>
        </tbody>   
      )
      }
      </table>
      <p></p>
        <button onClick={this.handleLogoutlo}>Logout</button>
     </div> 
        )}
      
          
        
        else{
        return(
          <Perfil/>
        )
      }
    }
    
}

export default Lookoperations;