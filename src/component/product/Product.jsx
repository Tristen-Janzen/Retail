import React, {Component} from 'react'
import InventoryDataService from '../../service/InventoryDataService'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            product_name: '',
            price: 0.00,
            image_url: '',
            details: '',
            stock: 0,
            preferred_stock: 0,
            ordered: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let product = {
            id: this.state.id,
            product_name: this.state.product_name,
            price: this.state.price,
            image_url: this.state.image_url,
            details: this.state.details,
            stock: this.state.stock,
            preferred_stock: this.state.preferred_stock,
            ordered: this.state.ordered
        }
        
        InventoryDataService.createProduct(product)
            .then(this.props.history.push(`/inventory`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Product</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled></input>
                        </div>
                        <div>
                            <lable>Product Name:</lable>
                            <input className="form-control" type="text" name="product_name" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <lable>Price:</lable>
                            <input className="form-control" type="text" name="price" onChange={this.handleChange}></input>
                        </div>       
                        <div>
                            <lable>image_url:</lable>
                            <input className="form-control" type="text" name="image_url" onChange={this.handleChange}></input>
                        </div>      
                        <div>
                            <lable>Details:</lable>
                            <input className="form-control" type="text" name="details" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <lable>Stock:</lable>
                            <input className="form-control" type="text" name="stock" onChange={this.handleChange}></input>
                        </div> 
                        <div>
                            <lable>Preferred Stock:</lable>
                            <input className="form-control" type="text" name="preferred_stock" onChange={this.handleChange}></input>
                        </div> 
                        <div>
                            <lable>Ordered:</lable>
                            <input className="form-control" type="text" name="ordered" onChange={this.handleChange}></input>
                        </div> <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Product