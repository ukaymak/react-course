import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h2>{this.props.info.newList}</h2>

            </div>
        )
    }
}
