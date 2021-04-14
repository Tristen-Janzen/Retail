import React, { Component } from 'react'
import InventoryDataService from '../../service/InventoryDataService';


class ListProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.refereshInventory = this.refereshInventory.bind(this)
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.upDateProductClicked = this.upDateProductClicked.bind(this)
        this.addProductClicked = this.addProductClicked.bind(this)
    }

    componentDidMount() {
        this.refereshInventory();
    }
    componentDidUpdate() {
        this.refereshInventory();
    }

    refereshInventory() {
        InventoryDataService.retrieveAllProducts()
        .then(
            response => {
                this.setState({
                    products: response.data,
                })
            }
        )
    }

    deleteProductClicked(id, product_name, price) {
        console.log('Delete Product Clicked')
        InventoryDataService.deleteProduct(id)
        .then(
            response => {
                this.setState({message: `Deleted Product: ${product_name} ${price}`})
                alert(this.state.message)
                this.refereshInventory(); 
            }
        )
    }
    
    upDateProductClicked(id, product_name) {
        console.log('Update Product Clicked')
        this.props.history.push(`/inventory/${id}/${product_name}`)
    }

    addProductClicked() {
        console.log('Add Product Clicked')
        this.props.history.push(`/inventory/-1`)
    }
 
   render() {
       return(
           <div className="container-fluid">
               <h1 style={{textAlign:"center"}}>Inventory</h1><br></br>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Product Name</th>
                               <th>Price</th>
                               <th>Image</th>
                               <th>Details</th>
                               <th>Stock</th>
                               <th>Preferred Stock</th>
                               <th>Ordered</th>
                               <th>Delete</th>
                               <th>Update</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.products.map (
                                   products => 
                                   <tr style={{textAlign: "center"}} key={products.id}>
                                       <td>{products.id}</td>
                                       <td>{products.product_name}</td>
                                       <td>{products.price}</td>
                                       <img src={products.image_url} alt="description" class="image"></img>
                                       <td>{products.details}</td>
                                       <td>{products.stock}</td>
                                       <td>{products.preferred_stock}</td>
                                       <td>{products.ordered}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(products.id, products.product_name, products.price)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateProductClicked(products.id, products.product_name)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={() => {this.addProductClicked()}}>Add Product</button>
                   </div>
               </div>
           </div>
       )
   } 
}

export default ListProductComponent; 