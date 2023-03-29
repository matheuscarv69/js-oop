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
    return `${this.#name}, ${this.#email}`
  }

}