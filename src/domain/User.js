export default class User {
  // Implementing encapsulation in name property
  #name
  #email
  #birthDate
  #role
  #active

  constructor(name, email, birthDate, role, active = true) {
    this.#name = name
    this.#email = email
    this.#birthDate = birthDate
    this.#role = role || 'student'
    this.#active = active
  }

  showInfos() {
    return `${this.#name}, are ${this.#calculateAge()} years old, and your email is ${this.#email}`
  }

  // This is a private method, they only called in this class
  #calculateAge() {

    const yearBirthDate = new Date(this.#birthDate).getFullYear();
    const currentYear = new Date().getFullYear()

    return currentYear - yearBirthDate

  }


}