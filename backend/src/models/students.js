
const STUDENTS = [
    {
        name: "David Anderson",
        email: "david.and@mail.com",
        enrollementNumber: "156483512",
        photo: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/8260117875_5ab9373bce_o.jpg?resize=600%2C401&ssl=1"

    }
]


class Student {

    constructor(data) {
        this.data = data
    }

    save() {
        /* TODO: Check if the data is good */
        if (
            (this.data.name && this.data.name.length)
            && (this.data.email && this.data.email.length)
            && (this.data.enrollementNumber && !isNaN(this.data.enrollementNumber))
            && (this.data.photo && this.data.photo.length)
        ) {
            STUDENTS.push(this.data)
        } else {
            throw Error("Bad params passed")
        }
    }
}

module.exports = {
    STUDENTS,
    Student
};
