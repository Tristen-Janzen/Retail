import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: this.props.name
        }
    }
    render() {
        return(
            <div className="container">
                <br></br><br></br>
                <div className="jumbotron" style={{textAlign:"center", backgroundColor:"Black"}}>
                <h1 style={{color:"Green"}}>Welcome {this.state.name} to the Inventory!!!</h1>
                <br></br>
                <h2 style={{color:"white"}}>You can manage your inventory <Link to="/inventory">here</Link></h2> 
                </div>
            </div>
        )
    }
}

export default WelcomeComponent;  