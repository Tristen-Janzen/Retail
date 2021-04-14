import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import ListProductComponent from '../product/ListProductComponent'
import ProductComponent from '../product/ProductComponent'
import Product from '../product/Product'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent name="Tristen"/></Route>                       
                        <Route path="/inventory/:id" component={Product} />
                        <Route path="/inventory/:id/:product_name" component={ProductComponent} />
                        <Route path="/inventory" exact component={ListProductComponent} />  
                    </Switch>
                <FooterComponent /> 
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 