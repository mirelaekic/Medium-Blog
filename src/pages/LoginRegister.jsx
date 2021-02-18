import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

class LoginRegister extends Component {
    render() {
        return (
            <Container>
                <Link to="/login">
                <Button>Log In</Button>
                </Link>
                <Link to="/register">
                <Button>Register</Button>
                </Link>
            </Container>
        )
    }
}
export default withRouter(LoginRegister)