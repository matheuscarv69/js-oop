import User from './User.js'

export default class Teacher extends User {

  constructor(name, email, birthDate, role = 'teacher', active = true) {
    super(name, email, birthDate, role, active)
  }

  approveStudent(student, courseName){
    return `Approved Student ${student} in Course: ${courseName}`
  }

}