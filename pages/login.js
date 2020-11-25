import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import AuthService from "../services/auth.service"
import {useRouter} from "next/router";

// const router = useRouter()

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    validateForm(){
        return this.state.username.length > 0 && this.state.password.length > 0;
    }


    handleSubmit = (e) => {
        // const router = useRouter()
        e.preventDefault();
        console.log(this.state)

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                window.location.href = "/admin/requests"
               // router.push("/admin")
            },
            error => {
                console.log(error)
            }
        )
    }

    render() {
        const {username, password} = this.state
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.onChangeUsername}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.onChangePassword}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!this.validateForm()}>
                        Войти
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login
