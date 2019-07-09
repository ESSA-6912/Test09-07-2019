import React, { useState } from "react"
import InputBox from "../../common/components/InputBox/InputBox"
import { List, Avatar } from "antd";

export default function StudentList({ students, actions }) {
    const [query, setQuery] = useState("")

    return (
        <>
            <InputBox placeholder="Search here..." onValueChange={q => setQuery(q)} />
            <List

                itemLayout="horizontal"
                dataSource={
                    students.filter(student =>
                        student.name
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1)
                }
                renderItem={item => (
                    <List.Item actions={actions}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.photo} />}
                            title={item.name}
                            description={item.email}
                        />
                    </List.Item>
                )} />
        </>
    )
}