import React, { useEffect } from "react";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux"
import { fetchStudents } from "../actions/StudentActions";
import StudentList from "./StudentList";
import Title from "../../common/components/Title/Title"
import InputBox from "../../common/components/InputBox/InputBox";

function ManageStudents({ students, addStudent }) {
    const { list } = students;
    const [student, _setStudent] = useState({})
    const setStudent = (data) => {
        _setStudent({ ...student, ...data })
    }
    useEffect(() => {
        fetchStudents();
    }, [])
    return (
        <Row style={{ minHeight: "100vh" }}>
            <Col xs={{ span: 22, offset: 1 }}
                md={{ span: 10, offset: 7 }}>
                <div>
                    <Title sub>Add a user here</Title>
                    <InputBox onValueChange={name => setStudent({ name })} placeholder="Name" />
                    <InputBox onValueChange={name => setStudent({ email })} type="email" placeholder="Email" />
                    <InputBox onValueChange={name => setStudent({ photo })} type="url" placeholder="Photo" />
                    <InputBox onValueChange={name => setStudent({ enrollementNumber })} type="number" placeholder="Enrollement Number" />
                    <Button onClick={() => addStudent(student)}>Add user</Button>
                </div>
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
    },
    addStudent: (student) => {
        dispatch(addStudent(student))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ManageStudents)