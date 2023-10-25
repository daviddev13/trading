import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Perfil from './perfil.js';

import axios from 'axios';

class Comindicators extends Component {

    constructor (props) {
        super();
        this.state={

          comindicatorsopen:props.atributo,
          
          date:'',

          trendStocks:'Flat',
          trendComodities:'Flat',
          trendYield:'Flat',
          trendForex:'Flat',

          trendBTC:'Flat',
          trendGold:'Flat',
          trendWTIC:'Flat',
          
          trendDollarDay:'Flat',
          trendDollarWe:'Flat',
          trendColcap:'Flat',
          
          Bull_Money:'',
          Bear_Money:'',

          moneyLocator:[],
          otherMarkets:[],
          Dollar:[],

          Coment_Bull:'',
          Coment_Bear:'',
          Coment_OtherMarkets:'',
          Coment_Dollar:'',

          RevMoneyLocator:false,
          RevOtherMarkets:false,
          RevDollar:false,                         
        } 
        this.handleLogoutci = this.handleLogoutci.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitOM = this.handleSubmitOM.bind(this);
        this.handleSubmitDollar = this.handleSubmitDollar.bind(this);

        this.getTable1 = this.getTable1.bind(this);
        this.getTable2 = this.getTable2.bind(this);
        this.getTable3 = this.getTable3.bind(this);

        this.handleReturn = this.handleReturn.bind(this);
        this.handleReturnDollar = this.handleReturnDollar.bind(this);
        this.handleReturnOtherMarkets= this.handleReturnOtherMarkets.bind(this);
      }

    handleLogoutci() {
        this.setState({comindicatorsopen:false})
      }

    //formulario 1 Money Locator
  handleSubmit(e) {   
    const send = this.state
    e.preventDefault();
      axios.post('http://localhost:5000/rperfil/save',send)
       .then (res => {
         alert(res.data)
         if(res.data==="Save"){
           this.setState({RevMoneyLocator:true}) 
           this.getTable1()
          }
         else{
           if(res.data==="Update"){
            this.handleReturn()
        }
       }
    })
    .catch(err => {console.error(err);})
  }

  // formulario 2 Other Markets
  handleSubmitOM(e){ 
    e.preventDefault(); 
      const sendOM = this.state
          axios.post('http://localhost:5000/rperfil/form2',sendOM)
           .then (res => {
             alert(res.data)
             if(res.data==="Save"){
               this.setState({RevOtherMarkets:true}) 
               this.getTable2()
              }
             else{
               if(res.data==="Update"){
                this.handleReturnOtherMarkets()
            }
           }
        })
        .catch(err => {console.error(err);})
    }
  
  // formulario 3 Dollar
    handleSubmitDollar(e){ 
      e.preventDefault();
        const sendDollar = this.state
            axios.post('http://localhost:5000/rperfil/form3',sendDollar)
             .then (res => {
               alert(res.data)
               if(res.data==="Save"){
                 this.setState({RevDollar:true}) 
                 this.getTable3()
                }
               else{
                 if(res.data==="Update"){
                  this.handleReturnDollar()
              }
             }
          })
          .catch(err => {console.error(err);})
    }

      //Se consige Tabla 1 Moneylocator
  getTable1(){
    console.log("Loading Table");
    axios.get('http://localhost:5000/rperfil/moneylocator')
    .then (res => {
       this.setState({moneyLocator: res.data});
    })
    .catch(err => {console.error(err);})
  }

  //Se consige Tabla 2 otherMarkets
  getTable2(){
    console.log("Loading Table 2");
    axios.get('http://localhost:5000/rperfil/table2')
      .then (res => {
         this.setState({otherMarkets: res.data});
      })
      .catch(err => {console.error(err);})
  }

   //Se consige Tabla 3 Dollar
  getTable3(){
    console.log("Loading Table 3 Dollar");
    axios.get('http://localhost:5000/rperfil/table3')
      .then (res => {
         this.setState({Dollar: res.data});
      })
      .catch(err => {console.error(err);})
  }

  handleReturn() {
    this.setState({RevMoneyLocator:false}) 
  }

  handleReturnOtherMarkets() {
    this.setState({RevOtherMarkets:false}) 
  }

  handleReturnDollar() {
    this.setState({RevDollar:false}) 
  }

  render () { 

      const comindicatorsopen=this.state.comindicatorsopen

      const date = this.state.date
      const trendStocks = this.state.trendStocks
      const trendYield = this.state.trendYield
      const trendComodities = this.state.trendComodities
      const trendForex = this.state.trendForex
  
      const trendBTC = this.state.trendBTC
      const trendGold = this.state.trendGold
      const trendWTIC = this.state.trendWTIC
      
      const trendDollarDay = this.state.trendDollarDay
      const trendDollarWe = this.state.trendDollarWe
      const trendColcap = this.state.trendColcap

      const RevMoneyLocator = this.state.RevMoneyLocator
    const RevOtherMarkets = this.state.RevOtherMarkets
    const RevDollar = this.state.RevDollar

    const Bull_Money = this.state.Bull_Money
    const Bear_Money = this.state.Bear_Money
    const Coment_Bull = this.state.Coment_Bull

    const Coment_OtherMarkets = this.state.Coment_OtherMarkets
    const Coment_Dollar = this.state.Coment_Dollar
    const USDCOP_en_pesos = this.state.USDCOP_en_pesos

    const moneyLocator= this.state.moneyLocator
    const otherMarkets= this.state.otherMarkets
    const Dollar= this.state.Dollar
       
      if(comindicatorsopen==="true"){
        if(RevMoneyLocator){
          return (
            <div>
              <h1>Perfil 2</h1>

              <form>
              <li>
                              <label > Bull_Money:
                                <select name="select"  value={Bull_Money} onChange={(e) => this.setState({ Bull_Money: e.target.value })}>
                                  <option value=""></option>
                                  <option value="Stocks">Stocks</option>
                                  <option value="Yield">Yield</option>
                                  <option value="Commodities">Commodities</option>
                                  <option value="Forex">Forex</option>
                                </select>
                              </label>
                              </li>
                              <li>
                              <label > Bear_Money:
                                <select name="select"  value={Bear_Money} onChange={(e) => this.setState({ Bear_Money: e.target.value })}>
                                <option value=""></option>
                                  <option value="Stocks">Stocks</option>
                                  <option value="Yield">Yield</option>
                                  <option value="Commodities">Commodities</option>
                                  <option value="Forex">Forex</option>
                                 </select>
                               </label>
                              </li>
              <div>Observa trading?<textarea name="descrip" value={Coment_Bull} onChange={(e) => this.setState({ Coment_Bull: e.target.value })}></textarea></div>
              
              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
              </form>
              
              <table>
              <thead>
             <tr>
               <th>Date</th>
               <th>Stocks</th>
               <th>Yield</th>
               <th>Commodities</th>
               <th>Forex</th>
               <th>Bull_Money</th>
               <th>Bear_Money</th>
            </tr>
            </thead>
              {
                 moneyLocator.map((dato) =>
                                   
                     <tbody>
                     <tr>
                      <td> {dato.Date}</td>
                      <td> {dato.Stocks}</td>
                      <td> {dato.Yield}</td>
                      <td> {dato.Commodities}</td>
                      <td> {dato.Forex}</td>
                      <td> {dato.Bull_Money}</td>
                      <td> {dato.Bear_Money}</td>                 
                    </tr>
                    </tbody>  
                 )
              }   
              </table>
              
               <button onClick={this.handleReturn}>return</button> 
            </div>
          )
        }
        else{
          if(RevOtherMarkets){
            return (
              <div>
                <h1>Review Other Markets</h1>
                 <form>
                   <div>Observa trading in Other Markets?<textarea name="descrip" value={Coment_OtherMarkets} onChange={(e) => this.setState({ Coment_OtherMarkets: e.target.value })}></textarea></div>
                <input type="submit" value="Submit" onClick={this.handleSubmitOM}/>
                </form>
                <table>
                <thead>
               <tr>
                 <th>Date</th>
                 <th>BTC</th>
                 <th>Gold</th>
                 <th>WTIC</th>
              </tr>
              </thead>
                {
                   otherMarkets.map( (dato) =>
                   <tbody>
                   <tr>
                     <td>{dato.Date}</td> 
                     <td>{dato.BTC}</td> 
                     <td>{dato.Gold}</td>
                     <td>{dato.WTIC}</td>
                     <td>{dato.Coment_OtherMarkets}</td>
                    </tr>
                  </tbody> 
                   )
                }   
                </table>
                <button onClick={this.handleReturn}>return</button> 
              </div>
            )
          }
          else{
            if(RevDollar){
              return (
                <div>
                  <h1>Review Dollar</h1>
                  <form>
                    <div>precio dolar sube/baja cuanto?<textarea name="preciodollar" value={USDCOP_en_pesos} onChange={(e) => this.setState({ USDCOP_en_pesos: e.target.value })}></textarea></div>
                    <div>Observa trading in Dollar?<textarea name="descrip" value={Coment_Dollar} onChange={(e) => this.setState({ Coment_Dollar: e.target.value })}></textarea></div>
                      <input type="submit" value="Submit" onClick={this.handleSubmitDollar}/>
                  </form>
                  <table>
                  <thead>
                 <tr>
                   <th>Date</th>
                   <th>Day</th>
                   <th>Week</th>
                   <th scope="col">USDCOP_en_pesos</th> 
                   <th scope="col">Observations</th>
                </tr>
                </thead>
                  {
                     Dollar.map( (dato) =>
                      <tbody>
                       <tr>
                         <td>{dato.Date}</td> 
                         <td>{dato.trendDollarDay}</td> 
                         <td>{dato.trendDollarWe}</td>
                         
        <td>{dato.USDCOP_en_pesos}</td>
        <td> {dato.Coment_Dollar}</td>
                        </tr>
                      </tbody> 
                     )
                  }   
                  </table>                                                     
                   <button onClick={this.handleReturn}>return</button> 
                </div>
              )
            }
            else{
              return (
                <div>
                <h2>Complete Indicators</h2>
               
                  <div class="card-group"> 
                  
                    <div class="card">
                       <div class="container">
                         <div >
                      <h3>1. Money Locator</h3>
                      <div class="card-body">
                      <form >  
                       <li>
                        <label> Date: 
                          <input type="date" value={date} onChange={(e) => this.setState({ date: e.target.value })}></input>
                        </label>
                       </li>
                       <li>
                        <label > Trend Stocks:
                           <select name="select"  value={trendStocks} onChange={(e) => this.setState({ trendStocks: e.target.value })}>
                             <option  value="Flat">Flat</option>
                             <option value="Bull">Bull</option>
                             <option value="Bear">Bear</option>
                           </select>
                         </label></li>
                         <li>
                         <label > Trend Yield:
                            <select name="select"  value={trendYield} onChange={(e) => this.setState({ trendYield: e.target.value })}>
                              <option value="Flat">Flat</option>
                              <option value="Bull">Bull</option>
                              <option value="Bear">Bear</option>
                            </select>
                          </label></li>
                          <li>
                          <label > Trend Commodities:
                            <select name="select"  value={trendComodities} onChange={(e) => this.setState({ trendComodities: e.target.value })}>
                              <option value="Flat">Flat</option>
                              <option value="Bull">Bull</option>
                              <option value="Bear">Bear</option>
                            </select>
                          </label></li>
                          <li>
                          <label > Trend Forex:
                            <select name="select"  value={trendForex} onChange={(e) => this.setState({ trendForex: e.target.value })}>
                              <option  value="Flat">Flat</option>
                              <option value="Bull">Bull</option>
                              <option value="Bear">Bear</option>
                            </select>
                          </label>
                          </li>
                          <div>
                            <h4>Confirmar Money Locator</h4>
                             <p> 
                               <li>Date: {this.state.date}</li>
                               <li>Stocks: {this.state.trendStocks} </li>
                               <li>Yield: {this.state.trendYield}</li>
                               <li>Commodities: {this.state.trendComodities}</li>
                               <li>Forex: {this.state.trendForex}</li>
                             </p>
                           </div>
                           <input type="submit" value="Submit_Money_Locator" onClick={this.handleSubmit}/>
                        </form>
                      </div>
                    </div>
                  </div>
                  </div>
                 
                    <div class="card">
                      <div class="container">
                <div  >
                    <h3>2. Other Markets</h3>
                     <div class="card-body">
                       <form >  
                         <label > Date: 
                           <input type="date" value={date} onChange={(e) => this.setState({ date: e.target.value })}></input>
                         </label>   
                         <label > Trend BTC:
                          <select name="select"  value={trendBTC} onChange={(e) => this.setState({ trendBTC: e.target.value })}>
                            <option  value="Flat">Flat</option>
                            <option value="Bull">Bull</option>
                            <option value="Bear">Bear</option>
                          </select>
                        </label>
                        <label > Trend Gold:
                          <select name="select"  value={trendGold} onChange={(e) => this.setState({ trendGold: e.target.value })}>
                            <option value="Flat">Flat</option>
                            <option value="Bull">Bull</option>
                            <option value="Bear">Bear</option>
                          </select>
                        </label>
                        <label > Trend WTIC:
                        <select name="select"  value={trendWTIC} onChange={(e) => this.setState({ trendWTIC: e.target.value })}>
                          <option value="Flat">Flat</option>
                          <option value="Bull">Bull</option>
                          <option value="Bear">Bear</option>
                        </select>
                        </label>
                        <div>
                          <h4>Confirmar Other Markets</h4>
                           <p>
                            <li>Date: {this.state.date} </li>
                            <li>BTC: {this.state.trendBTC}  </li>
                            <li>Gold: {this.state.trendGold}</li>
                            <li>WTIC: {this.state.trendWTIC}</li>
                           </p>
                         </div>
                         <input type="submit" value="Submit_Other_Markets" onClick={this.handleSubmitOM}/>
                     </form>
                    </div>
                    </div>
                      </div>
                    </div>
        
                    <div class="card"> 
                      <div class="container">
                <div >
                    <h3>3. Dollar</h3>
                     <div class="card-body">
                       <form>
                         <label > Date: 
                           <input type="date" value={date} onChange={(e) => this.setState({ date: e.target.value })}></input>
                         </label>   
                         <label > Trend Day:
                         <select name="select"  value={trendDollarDay} onChange={(e) => this.setState({ trendDollarDay: e.target.value })}>
                           <option  value="Flat">Flat</option>
                           <option value="Bull">Bull</option>
                           <option value="Bear">Bear</option>
                         </select>
                       </label>
                       <label > Trend Week:
                         <select name="select"  value={trendDollarWe} onChange={(e) => this.setState({ trendDollarWe: e.target.value })}>
                           <option value="Flat">Flat</option>
                           <option value="Bull">Bull</option>
                           <option value="Bear">Bear</option>
                         </select>
                       </label>
                       <label > Colcap Day:
                         <select name="select"  value={trendColcap} onChange={(e) => this.setState({ trendColcap: e.target.value })}>
                           <option value="Flat">Flat</option>
                           <option value="Bull">Bull</option>
                           <option value="Bear">Bear</option>
                         </select>
                       </label>
                       <div>
                       <h4>Confirm Dollar</h4>
                       <p>
                         <li>Date: {this.state.date}</li>
                         <li> Dollar Day: {this.state.trendDollarDay} </li>
                         <li>Dollar Week: {this.state.trendDollarWe}</li>
                       </p>
                     </div>
                         <input type="submit" value="Submit_Dollar" onClick={this.handleSubmitDollar}/>
                       </form>
                     </div>
                    </div> 
                      </div>
                    </div>
                </div>
        
                <button onClick={this.handleLogoutci}>Return</button>
                  </div>
              )
            }
          }
        }
      }
      else{
        return(
          <Perfil/>
        )
      }
  }
}

export default Comindicators;