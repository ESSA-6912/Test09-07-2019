import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux"
import { fetchStudents } from "../actions/StudentActions";
import StudentList from "./StudentList";

function PresentStudents({ students }) {
    const { list } = students;
    useEffect(() => {
        fetchStudents();
    }, [])
    return (
        <Row style={{ minHeight: "100vh" }}>
            <Col xs={{ span: 22, offset: 1 }}
                md={{ span: 10, offset: 7 }}>
                {
                    list && <StudentList students={list} />
                }
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    students: state.students
})
const mapDispatchToProps = (dispatch) => ({
    fetchStudents: () => {
        dispatch(fetchStudents())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PresentStudents)