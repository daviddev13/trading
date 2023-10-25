import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Perfil from './perfil.js';
import './App.css';

class TableMoneyLocator extends Component {

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
        axios.delete(`http://localhost:5000/rperfil/moneylocator/${id}`)
          .then (res => {
            alert(res.data.message);
            this.updateTable();
          })
          .catch(err => {console.error(err);})
      }

      updateTable()
      {
        this.setState({lookFromSession:true})
        this.setState({returnPerfil:true})
        /*
        actualizarDatos() {
          // Aquí puedes realizar una solicitud al servidor para obtener la lista actualizada de datos y actualizar el estado de tu componente.
          // Por ejemplo:
          fetch('/moneylocator')
            .then(response => response.json())
            .then(data => {
              this.setState({ atributo2: data });
            })
            .catch(error => {
              console.error(error);
            });
        }
        */
      }

    render () { 
      const lookFromSession=this.state.lookFromSession
      const returnPerfil=this.state.returnPerfil

      if(lookFromSession){
        return (
        <div>
      <button onClick={this.handleLogoutlo}>Logout</button>
        
   

      <div className="container">      
        <div class="col-md-11 mx-auto">
          <table class="table table-bordered">
           <thead>
             <tr>
             <th scope="col"><font size="2">Id </font></th>
         <th scope="col"><font size="2">Date </font></th>
         <th scope="col"><font size="2">Stocks </font></th>
         <th scope="col"><font size="2">Yield  </font></th>
         <th scope="col"><font size="2">CRB    </font></th>
         <th scope="col"><font size="2">Forex  </font></th>
         <th scope="col"><font size="2">Bull_Money </font></th>
         <th scope="col"><font size="2">Bear_Money </font></th>
         <th scope="col"><font size="2">Observations </font></th>            
             </tr>
           </thead>
           {
  this.props.atributo2.map((dato) =>
    <tbody>
      <tr>
      <td width="112" height="25"><font size="2"> {dato.ID}</font></td>
        <td width="112" height="25"><font size="2"> {dato.Date}</font></td>
        <td width="112" height="25" className={dato.Stocks === 'Bear' ? 'Red-text' : dato.Stocks === 'Bull' ? 'green-text' : dato.Stocks === 'Flat' ? 'gray-text' :''}>{dato.Stocks}</td>
        <td width="112" height="25"><font size="2"> {dato.Yield}</font></td>
        <td width="112" height="25"> <font size="2">{dato.Commodities}</font></td>
        <td width="112" height="25"><font size="2"> {dato.Forex}</font></td>
        <td width="112" height="25"> <font size="2">{dato.Bull_Money}</font></td>
        <td width="112" height="25"> <font size="2">{dato.Bear_Money}</font></td>
        <td width="112" height="25"> <font size="2">{dato.Coment_Bull}</font></td>
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
          if(returnPerfil){ 
            return(<Perfil/>)
          }
          else{

          
      return (
        <div>

            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
             <div className="container"> 
             <h2 className="navbar-brand">Money Locator</h2>   
                <form class="form-inline">
                   <a class="btn btn-outline-success" href="/">Return</a>
                </form>
              </div>  
            </nav>
            
          <div className="container"> 
            <div class="col-md-8 mx-auto" >
              <div class="card"> 
                   <div class="card-body">
                      <li >Stocks = $INDU   = DJI     </li>     
                      <li> Yield  = $UST30y = 30years US Treasury </li> 
                      <li>CRB    = $CRB    = CRB index  </li> 
                      <li>    Forex  = $USD    = US dollar </li> 
                      To look the charts visit <a href="https://stockcharts.com">stockcharts</a> 
                   </div>
              </div>    
            </div>    
          </div>   

          <div className="container">      
            <div class="col-md-11 mx-auto">
              <table class="table table-bordered">
               <thead>
                 <tr className="link">
             <th className="rojo"> Date</th>
             <th className="rojo" scope="col"><font size="2">Stocks </font></th>
             <th scope="col"><font size="2">Yield  </font></th>
             <th scope="col"><font size="2">CRB    </font></th>
             <th scope="col"><font size="2">Forex  </font></th>
             <th scope="col"><font size="2">Bull_Money </font></th>
             <th scope="col"><font size="2">Bear_Money </font></th>
             <th className="rojo" scope="col"><font size="2">Observations </font></th>            
                 </tr>
               </thead>
            {
               this.props.atributo2.map((dato) =>
               <tbody>
                <tr>
                 <td>
                    {dato.Date}
                </td>
                 <td width="112" height="25" className={dato.Stocks === 'Bear' ? 'rojo' : dato.Stocks === 'Bull' ? 'verde' : dato.Stocks === 'Flat' ? 'gris' :''}>
                    <font size="2">{dato.Stocks}</font>
                 </td>
                 <td width="112" height="25" className={this.getCellStyle2(dato.Yield)}>
                    <font size="2">{dato.Yield}</font>
                 </td>
                 <td width="112" height="25" className={this.getCellStyle2(dato.Commodities)}>
                    <font size="2"> {dato.Commodities}</font>
                </td>
                 <td width="112" height="25" className={this.getCellStyle2(dato.Forex)}>
                    <font size="2"> {dato.Forex}</font>
                </td>
                 <td width="112" height="25"> 
                   <font size="2">{dato.Bull_Money}</font>
                </td>
                 <td width="112" height="25"> 
                    <font size="2">{dato.Bear_Money}</font>
                </td>
                 <td width="112" height="25"> 
                    <font size="2">{dato.Coment_Bull}</font>
                </td>   
               </tr>
               </tbody>    
               )
            }   
              </table>
            </div> 
          </div> 

         </div>  
             
        );}
      }   
    }
       
}

export default TableMoneyLocator;