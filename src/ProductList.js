import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class ProductList extends Component {


    render() {
        return (
            <div>
                <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
                {/* <h2>{this.props.info.newList}</h2> */}
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>QuantityPerUnit</th>
                            <th>UnitsInStock</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product => (
                          <tr key = { product.id }>
                              <th scope="row">{product.id}</th>
                              <th>{product.productName}</th>
                              <th>{product.unitPrice}</th>
                              <th>{product.quantityPerUnit}</th>
                              <th>{product.unitsInStock}</th>
                              <th><Button onClick={()=>this.props.addToCart(product)} color="primary">Add</Button></th>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
