import React, { useState } from "react"
import { connect } from "react-redux"
import { Switch, Route, Link } from "react-router-dom"
import Title from "../../common/components/Title/Title"
import { Row, Col, InputGroup, Input, Button } from "antd";
import ManageStudents from "../Students/ManageStudents";
import PresentStudents from "../Students/PresentStudents";
import ListStudents from "../Students/ListStudents";

function Home({ teacher }) {

    const links = {
        list: "List",
        manage: "Manage",
        present: "Mark presence",
    }

    return (
        <div>
            <Row style={{ minHeight: "100vh" }}>
                <Col xs={{ span: 22, offset: 1 }}
                    md={{ span: 10, offset: 7 }}>
                    <Title>
                        EduNext
                    </Title>
                    {
                        Object.entries(links).map(([to, label]) => (
                            <Link to={"/home/" + to}><Button style={{ margin: 5 }}>{label}</Button></Link>
                        ))
                    }
                    <Switch>
                        <Route path="/home" exact component={ListStudents} />
                        <Route path="/home/list" component={ListStudents} />
                        <Route path="/home/manage" component={ManageStudents} />
                        <Route path="/home/present" component={PresentStudents} />
                    </Switch>

                </Col>
            </Row>
        </div>
    )

}

const mapStateToProps = ({ teacher }) => ({
    teacher
})

export default connect(mapStateToProps, null)(Home);