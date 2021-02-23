import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          surname: '',
          name: '',
          email: '',
          password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    handleSubmit(event) {
        axios.post('http://localhost:3003/authors/register',{
            email: this.state.email,
            password: this.state.password,
            surname: this.state.surname,
            name: this.state.name,
             withCredentials: true
        }).then(function (res){
            console.log(res)
            localStorage.setItem("accessToken", res.data.token)
            localStorage.setItem('user', res.config.data);
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }
    render() {
        if(localStorage.getItem("user")){
            return <Redirect to='/'/>
        }
        return (
            <Container style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="surname" value={this.state.surname} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="name" value={this.state.name} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}

