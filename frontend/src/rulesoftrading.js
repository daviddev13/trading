import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

class Rulesoftrading extends Component {

  constructor(props){
    super(props);
    this.state={
                };
  };

  render(){
     return(
		<div>
		<nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
		   <div class="container"> 
		   <h2 class="navbar-brand">Rules of trading</h2>   
			  <form class="form-inline">
				<Link class="btn btn-outline-success" to="/">Return to Home</Link>
			  </form>  
			  <form class="form-inline">
				<Link class="btn btn-outline-success" to="/session">Session</Link>
			  </form>
		  </div>  
		  </nav>
	  
	  <div class="container">
	   
		<div >
	  
		  
		  <p>
			<li>
			  <font size="2"><i><u><span>Resistencias con precio</span></u></i> (No velas)</font>
			  
				  <div class="col-md-1" >
					 <table class="table table-bordered"> 
				<tr>
				  <td width="2" style={{padding: "2px"}}>Weekly</td>
				  <td width="2" style={{backgroundColor: "#000000",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td width="2">Day</td>
				  <td width="2" style={{backgroundColor: "#000000",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td width="2">H4</td>
				  <td width="2" style={{backgroundColor: "#3465a4",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td width="2">H1</td>
				  <td width="2" style={{backgroundColor: "#5eb91e",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td width="2">M30</td>
				  <td width="2" style={{backgroundColor: "#CA8125",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td width="2">M15</td>
				  <td width="2" style={{backgroundColor: "#CA25C9",padding: "10px"}}></td>
				</tr>
				<tr>
				  <td >M5</td>
				  <td style={{backgroundColor: "#F39C12",padding: "10px"}}></td>
				</tr>
					 </table>
				  </div>
			  

		   </li> 
		   <li>
			 <font size="2">Operar si y solo si ya<span> </span><i><u><span>registro anterior operación</span></u></i></font>
		   </li>
		   <li>
			  <font size="2" >Tener una <i><u><span >perdida máxima clara</span></u></i></font>
		   </li>
		   <li>
			  <font size="2" >Observar <i><u><span>movimiento tiempo mayor </span></u></i></font>
		   </li>	
		   <li>
			  <font size="2" >Controlar <i><u><span>inversión con la </span></u></i><u><span></span></u><i><u><span>tendencia</span></u></i></font>
			  <font size="2">(En tendencia = Mayor inversión Contra Tendencia = Menor inversión)</font>
		   </li>
		   <li>
			   <font size="2" >Entro Deslizado Cambie producto</font>
		   </li>
		   <li>
			   <font size="2">Revisar volatilidad del grafico </font>
		   </li>
		   <li>
			   <font size="2">2 ganancias seguidas terminar trading </font>
		   </li>
		  </p>
	  
	  


	  <div class="container">
		<div class="col-md-7 mx-auto">
		<table class="table table-bordered "> 
			<thead>
			   <tr>
		   <th scope="col">Rule</th>
		   <th scope="col">Volumen </th>
		   <th scope="col">Resis </th>
		   <th scope="col">Cambio de Velas</th>
		   <th scope="col">MME </th>
		   <th scope="col">Tiempo </th>
			   </tr>
			 </thead>
			 <tbody>
			   <tr>
	  <td><font size="2">Rebote Largo </font></td>
	  <td><font size="2"> Relevante Máx 2/3 velas</font></td>
	  <td><font size="2">Choque Canal</font></td>
	  <td><font size="2"><p>VL a VP (No media)</p> Sombras largas</font></td>
	  <td><font size="2">lejanía/cercanía MME</font></td>
	  <td><font size="2">Inicio</font></td>
			   </tr>
			   <tr>
	  <td ><font size="2">Rebote Corto</font></td>
	  <td ><font size="2" >No Volumen</font></td>
	  <td ><font size="2" >Choque Canal</font></td>
	  <td ><font size="2" ><p>VL a VP (No media)</p> Sombras largas</font></td>
	  <td><font size="2" >lejanía/cercanía MME</font></td>
	  <td><font size="2">Inicio</font></td>
			   </tr>
			 </tbody>
		</table>
		</div>
	  </div>


	  <div class="container">
		 <div class="col-md-7 mx-auto">
		   <table class="table table-bordered">
			<thead>
			   <tr>
		   <th scope="col">Rule </th>
		   <th scope="col">Volumen </th>
		   <th scope="col">tiempo mayor</th>
		   <th scope="col">MME </th>
			   </tr>
			 </thead>
			 <tbody>
			   <tr>
	  <td width="112" height="25"><font size="2" >Cruce Corto</font></td>
	  <td width="128"><font size="2" >No volumen</font> </td>
	  <td width="119"><font size="2" >No sombra Larga (tiempo mayor)</font></td>
	  <td><font size="2" >lejanía/cercanía MME</font></td>	   
			   </tr>
			   <tr>
	  <td width="112" ><font size="2">Cruce Largo</font></td>
	  <td width="128" ><font size="2" > Relevante Máximo 2/3 velas</font> </td>
	  <td width="119"><font size="2" >No sombra Larga  </font></td>
	  <td><font size="2" >lejanía/cercanía MME</font></td>
			   </tr>
			 </tbody>
		   </table>



		   
		 </div>
	  </div>

	  <div class="container">
		 <div class="col-md-7 mx-auto">
		   <table class="table table-bordered">
			<thead>
			   <tr><th scope="col">Durante Trading</th></tr>
			 </thead>
			 <tbody>
			   <tr>  Evolucione Resistencias ve riesgo = Salida  </tr>
			   <tr>  Vigilar tiempos de cierre   </tr>
			   <tr>  No ver color de Compra/Venta  </tr>
			   <tr>  Tiene esperanza = Salida </tr>
			   <tr>  IN sin regla = Salida  </tr>
			   <tr>  Contar velas  </tr>
			 </tbody>
		   </table>



		   
		 </div>
	  </div>

	<p><Link to="/session">Session</Link></p>
	</div>
	</div>
	    </div>
     )
  }
}

export default Rulesoftrading;
