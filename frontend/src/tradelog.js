import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Perfil from './perfil.js';

class Tradelog extends Component {

    constructor (props) {
        super();
        this.state={
          date:'',

          operacion:'',
          tendenciaMayor:'',
          entrada:'',
          salida:'',
          arriesgado:'',
          obs:'',
          cfd:'',
          valor:'',

          tradelogopen:props.atributo
        } 
        this.handleSubmitRegisOpera = this.handleSubmitRegisOpera.bind(this);
        this.handleLogouttl = this.handleLogouttl.bind(this);
      }

      handleSubmitRegisOpera(e){
        e.preventDefault();
        const sendRegisOpera = this.state
        axios.post('http://localhost:5000/rperfil/formregisopera',sendRegisOpera)
               .then (res => {
                 alert(res.data)
                })
            .catch(err => {console.error(err);})
      }

      handleLogouttl() {
        this.setState({tradelogopen:false})
      }

    render () { 

      const date = this.state.date

      const operacion= this.state.operacion
      const tendenciaMayor= this.state.tendenciaMayor
      const entrada= this.state.entrada
      const salida= this.state.salida
      const arriesgado= this.state.arriesgado
      const obs= this.state.obs
      const cfd= this.state.cfd
      const valor= this.state.valor

      const tradelogopen=this.state.tradelogopen
       
      if(tradelogopen){
      return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                  <div class="container"> 
                    <h2 class="navbar-brand">Trade Log</h2>   
                      <form class="form-inline">
                        <button class="btn btn-outline-success" onClick={this.handleLogouttl}>Return</button>
                      </form>
                  </div>  
               </nav>

              <div class="container"> 
              <div class="col-md-7 mx-auto">
                <form>
                <label> Date: 
                  <input type="date" value={date} onChange={(e) => this.setState({ date: e.target.value })}></input>
                </label>   
                <label> CFD:  
                  <select name="select" value={cfd} onChange={(e) => this.setState({ cfd: e.target.value })}>       
                    <option value=""></option>
                    <option value="WS30">WS30</option>
                    <option value="Nasdaq">Nasdaq</option>
                    <option value="Gold">Gold</option>
                    <option value="WTIC">WTIC</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </label>   
                <label> Tamaño:
                  <input type="text" value={arriesgado} onChange={(e) => this.setState({ arriesgado: e.target.value })}></input>
                </label>
                <label> Operacion:
                  <select name="select"  value={operacion} onChange={(e) => this.setState({ operacion: e.target.value })}>       
                    <option value=""></option>
                    <option value="largo">Largo</option>
                    <option value="corto">Corto</option>
                  </select>
                </label>
                <label> Tendencia mayor:
                  <select name="select"  value={tendenciaMayor} onChange={(e) => this.setState({ tendenciaMayor: e.target.value })}>
                    <option value=""></option>
                    <option value="contraria">Contraria</option>
                    <option value="igual">Igual</option>
                  </select>
                </label>
                <label> Entro por:
                  <select name="select"  value={entrada} onChange={(e) => this.setState({ entrada: e.target.value })}>
                    <option value=""></option>
                    <option value="XCorto">Cruzo Corto</option>
                    <option value="XLargo">Cruzo Largo</option>
                    <option value="ReboteCorto">Rebote Corto</option>
                    <option value="ReboteLargo">Rebote Largo</option>
                    <option value="Venganza">Venganza</option>
                    <option value="V.O Claro">V.O Claro</option>
                  </select>
                </label>
                <label> Salio por:
                  <select name="select"  value={salida} onChange={(e) => this.setState({ salida: e.target.value })}>
                    <option value=""></option>
                    <option value="Descontrol">Descontrol</option>
                    <option value="Valor Objetivo">Valor Objetivo</option>
                    <option value="Stop Loss">Stop Loss</option>
                    <option value="Ve Riesgo">Ve Riesgo</option>
                    <option value="Seguro de win">Seguro de win</option>
                    <option value="Esperanza">Esperanza</option>
                    <option value="No rule">No rule</option>
                    <option value="In sin rule">IN sin rule</option>
                    <option value="Miedo">Miedo</option>
                    <option value="Tiempo de cierre">Tiempo de cierre</option>
                  </select>
                </label>
                <label> Valor:
                  <input type="text" value={valor} onChange={(e) => this.setState({ valor: e.target.value })}></input>
                </label>
                  <div>Observaciones:<textarea name="descrip" value={obs} onChange={(e) => this.setState({ obs: e.target.value })}></textarea></div>
              
                <div>
                  <h4>Confirm Regis</h4>
                    <p>
                    <li>Date: {this.state.date}</li>
                    <li>CFD: {this.state.cfd}</li>
                    <li>Operacion: {this.state.operacion} </li>
                    <li>Tamaño: {this.state.arriesgado} </li>
                    <li>Tendencia mayor: {this.state.tendenciaMayor}</li>
                    <li>Regla: {this.state.entrada}</li>
                    <li>Salio por: {this.state.salida}</li>
                    <li>Valor: {this.state.valor}</li>
                    <li>Observaciones: {this.state.obs}</li>
                    </p>
                </div>
                <input type="submit" value="Submit_RegisOpera" onClick={this.handleSubmitRegisOpera}/>
              </form>
              </div>
              </div>
             
              
            </div> 
        )}
      else{
        return(
          <Perfil/>
        )
        
      }

    }
}

export default Tradelog;