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

const newUser = new User('Axel', "axel@gmail.com", '1951-01-01')

console.log(newUser)
console.log(newUser.showInfos())
console.log(User.prototype.isPrototypeOf(newUser))