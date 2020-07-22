import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.notify(
      `${this.state.email} ${this.state.city} ${this.state.description} added to db`,
      "success",
      5
    );
    event.target.reset();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter e mail"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter pasword"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>-</option>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Sivas</option>
              <option>Edirne</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
