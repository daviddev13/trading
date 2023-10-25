import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Link } from "react-router-dom";

import TableOtherMarkets from './tableothermarkets'
import TableMoneyLocator from './tablemoneylocator'
import TableDollar from "./tabledollar";

class General extends Component {

  constructor(props){
    super(props);
    this.state={
                 home:true,
                 tableMoneyLocator:false,
                 tableOtherMarkets:false,
                 tableDollar:false,

                 moneyLocator:[],
                 otherMarkets:[],
                 Dollar:[],
                };
    this.getMoneyLocator = this.getMoneyLocator.bind(this);
    this.getOtherMarkets = this.getOtherMarkets.bind(this);
    this.getDollar = this.getDollar.bind(this);

    this.openMoneyLocator = this.openMoneyLocator.bind(this);
    this.openOtherMarkets = this.openOtherMarkets.bind(this);
    this.openDollar = this.openDollar.bind(this);
  };

  openMoneyLocator(){
    this.setState({tableMoneyLocator:true})
    this.setState({home:false})
  }

  openOtherMarkets(){
      this.setState({tableOtherMarkets:true})
      this.setState({home:false})
  }

  openDollar(){
        this.setState({tableDollar:true})
        this.setState({home:false})
  }

 //Se consige Tabla 1 Moneylocator
  getMoneyLocator(){
    console.log("Loading Table 1");
    axios.get('http://localhost:5000/rperfil/moneylocator')
    .then (res => {
       this.setState({moneyLocator: res.data})
    })
    .catch(err => {console.error(err);})
    this.openMoneyLocator()
   return
  }

//Se consige Tabla 2 OtherMarkets
  getOtherMarkets(){
    console.log("Loading Table 2 Other markets");
    axios.get('http://localhost:5000/rperfil/table2')
    .then (res => {
       this.setState({otherMarkets: res.data})
    })
    .catch(err => {console.error(err);})
    this.openOtherMarkets()
   return
  }

//Se consige Tabla 3 Dollar
  getDollar(){
    console.log("Loading Table Dollar");
    axios.get('http://localhost:5000/rperfil/table3')
    .then (res => {
       this.setState({Dollar: res.data})
    })
    .catch(err => {console.error(err);})
    this.openDollar()
   return
  }

  render(){
    const home= this.state.home
    const tableMoneyLocator= this.state.tableMoneyLocator
    const tableOtherMarkets= this.state.tableOtherMarkets
    const tableDollar= this.state.tableDollar
    
    if (home===true && tableMoneyLocator===false && tableOtherMarkets===false && tableDollar===false) {
      return (
        <div >
          
        <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
         <div class="container"> 
         <h2 class="navbar-brand">Home-Investment</h2>   
            <form class="form-inline">
              <Link class="btn btn-outline-success" to="/session">Session</Link>
            </form></div>  
        </nav>
              
        <div class="card-group">

            <div class="card">
              <div class="container">
                <div class="card-body">
                   <h4>Money Locator</h4>
                       <p> Comparador de los 4 mercados principales,
                          el cual muestra la localizacion del dinero 
                          para invertir 
                           con la tendencia. Mercados: 
                       </p>
                       <p>
                        <li>Acciones /Stocks (Dow Jones Industrial Average (DJI Index))</li>
                        <li>Tasas de  interés del gobierno /Yield  (30-Year US Trasury Yield (Yield index))</li>
                        <li>Materias Primas /Commodities (CRB index) y</li>
                        <li>Divisas/Forex (Dollar Index))</li>                         
                      </p>
                       <p>Nota: Recordar el Bono /Bond es el opuesto a las tasas de interés del gobierno (Treasury Yield) 
                       </p>
                       <button class="btn btn-outline-success" onClick={this.getMoneyLocator}>Show Indicator</button> 
                </div>
             </div>
            </div>
      
           <div class="card">
               <div class="container">
                  <div class="card-body">
                     <h4>Other Markets Locator</h4>
                     <p> Comparador de 3 mercados secundarios que por su 
                         relevancia en el mundo actuan de manera autonoma.
                     </p>
                      <p>
                      <li>Bitcoin BTC (Bitcoin Index (Nyxbt))</li>
                      <li> Oro (Gold Commodities)</li>
                      <li>Petroleo (Wtic Commodities)</li>
                      </p>
                       <p>OJO: El Petroleo puede ser autonomo pero 
                        aun asi depende de su mercado
                        principal CRB index.
                       </p>
                       <button class="btn btn-outline-success" onClick={this.getOtherMarkets}>Show Indicator</button> 
                    </div>
                 </div>
            </div>
      
            <div class="card">
              <div class="container">
                  <div class="card-body">
                    <h4>Dollar</h4>
                    <p> Tabla que muestra el comportamiento semanal y diario de la 
                        divisa USD/COP es decir el Dollar(USD) respecto al peso Colombiano (COP). 
                    </p>
                    <button class="btn btn-outline-success" onClick={this.getDollar}>Show table</button>
                 </div>
              </div>
              <div class="card">
                 <div class="container">
                    <div class="card-body">
                      <h4>Trading Rules</h4>
                      <p>Main trading rules</p>
                      <Link class="btn btn-outline-success" to="/rules">Show Rules</Link>
        
                   </div>
                 </div>
              </div>
              <div class="card">
                 <div class="container">
                    <div class="card-body">
                      <h5 class="card-title">About the author:</h5>
                      <p><font size="2">M.David L.Roa apasionado por el mundo de la programación 
                        y el trading. Cuya misión con esta pagina 
                        es analizar los principales movimientos del mercado para invertir con la tendencia.
                          Contacto: dudaeinfo@gmail.com</font>
                        </p>
                       
        
                   </div>
                 </div>
              </div>
            </div>
      </div>
   </div>
          )
      }
      if (home===false  && tableMoneyLocator===false && tableOtherMarkets===true && tableDollar===false ) {
        return (
          <TableOtherMarkets atributo2={this.state.otherMarkets}>
            </TableOtherMarkets>
          )
        }
    if (home===false  && tableMoneyLocator===true && tableOtherMarkets===false && tableDollar===false ){
        return (
        <TableMoneyLocator atributo2={this.state.moneyLocator}>
          </TableMoneyLocator>
        )
      }
    if (home===false && tableMoneyLocator===false && tableOtherMarkets===false && tableDollar===true ){
      return (
        <TableDollar atributo2={this.state.Dollar}>
          </TableDollar>
        )
      }
  }
}

export default General;


