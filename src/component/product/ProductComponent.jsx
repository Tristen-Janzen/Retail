import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import InventoryDataService from '../../service/InventoryDataService'

class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            product_name: this.props.match.params.product_name,
            price: 0.00,
            image_url: '',
            details: '',
            stock: 0,
            preferred_stock: 0,
            ordered: 0
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let product = {
            id: this.state.id,
            product_name: values.product_name,
            price: values.price,
            image_url: values.image_url,
            details: values.details,
            stock: values.stock,
            preferred_stock: values.preferred_stock,
            ordered: values.ordered
        }

            InventoryDataService.updateProduct(product)
            .then(() => this.props.history.push('/inventory'))
    }

    render() {
        let {id, product_name, price, image_url, details, stock, preferred_stock, ordered} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Product</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, product_name, price, image_url, details, stock, preferred_stock, ordered}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-contorl" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Product Name</label>
                                        <Field className="form-control" type="text" name="product_name" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Price</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset>
                                    <fieldset>
                                        <label>image_url</label>
                                        <Field className="form-control" type="text" name="image_url" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Details</label>
                                        <Field className="form-control" type="text" name="details" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Stock</label>
                                        <Field className="form-control" type="text" name="stock" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Preferred Stock</label>
                                        <Field className="form-control" type="text" name="preferred_stock" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Ordered</label>
                                        <Field className="form-control" type="text" name="ordered" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ProductComponent 