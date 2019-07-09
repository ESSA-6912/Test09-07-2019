import React, { useState } from "react"
import { connect } from "react-redux"
import Title from "../../common/components/Title/Title"
import Greeting from "../../common/components/Greeting/Greeting"
import InputBox from "../../common/components/InputBox/InputBox"
import { Row, Col, InputGroup, Input, Button } from "antd";
import { AUTH_ACTIONS, loginTeacher } from "../actions/AuthActions";

function Login({ login, }) {

    /* TODO: REMOVE THE username AND password  */
    const [user, _setUser] = useState({ username: "admin", password: "admin" }) // just for testing
    const setUser = data => {
        _setUser({ ...user, ...data })
    }


    return (
        <div>
            <Row type="flex" align="middle" style={{ minHeight: "100vh" }}>
                <Col xs={{ span: 22, offset: 1 }}
                    md={{ span: 10, offset: 7 }}>
                    <Title>
                        <Greeting />,
                    </Title>
                    <Title sub>
                        Welcome to EduNext, login in here.
                    </Title>
                    <Input.Group>
                        <InputBox
                            onValueChange={username => setUser({ username })}
                            placeholder="Username" />
                        <InputBox
                            onValueChange={password => setUser({ password })}
                            placeholder="Password" type="password" />
                    </Input.Group>
                    <Button onClick={() => login(user.username, user.password)}>Login</Button>
                </Col>
            </Row>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => {
        dispatch(loginTeacher(username, password))
    }
})

export default connect(null, mapDispatchToProps)(Login);