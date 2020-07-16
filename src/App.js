import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state = {currentCategory: " ", products:[] };

  changeCategory = (category)=>{
    this.setState({currentCategory: category.categoryName})
  }

  getProducts = ()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
  }


  componentDidMount(){
    this.getProducts();
  }



  render() {
    let productInfo = { title: "ProductList", newList: "List" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory ={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
