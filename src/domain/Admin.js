import User from './User.js'

class Admin extends User {

  constructor(name, email, birthDate, role = 'admin', active = true) {
    super(name, email, birthDate, role, active)
  }

  createCourse(courseName, numberOfVacancies) {
    return `Course ${courseName} created with ${numberOfVacancies} vacancies`
  }

}

const newAdmin = new Admin('Rodrigo', 'rodrigo@gmail.com', '2021-01-01')

console.log(newAdmin.createCourse('Js', 20))


