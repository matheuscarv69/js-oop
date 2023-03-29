import User from './User.js'

export default class Admin extends User {

  constructor(name, email, birthDate, role = 'admin', active = true) {
    super(name, email, birthDate, role, active)
  }

  createCourse(courseName, numberOfVacancies) {
    return `Course ${courseName} created with ${numberOfVacancies} vacancies`
  }

}