export default class User {
  
  constructor(name, email, birthDate, role, active = true) {
    this.name = name
    this.email = email
    this.birthDate = birthDate
    this.role = role || 'student'
    this.active = active
  }

  showInfos() {
    return `${this.name}, ${this.email}`
  }

}