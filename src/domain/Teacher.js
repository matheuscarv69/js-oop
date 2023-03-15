import User from './User.js'

class Teacher extends User {

  constructor(name, email, birthDate, role = 'teacher', active = true) {
    super(name, email, birthDate, role, active)
  }

  approveStudent(student, courseName){
    return `Approved Student ${student} in Course: ${courseName}`
  }

}

const newTeacher = new Teacher('Mariana', 'mariana@gmail.com', '2021-10-01')

console.log(newTeacher)
console.log(newTeacher.showInfos())
console.log(newTeacher.approveStudent('Juliana', 'JS'))