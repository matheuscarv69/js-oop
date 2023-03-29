import User from "./domain/User.js"
import Admin from "./domain/Admin.js"
import Teacher from "./domain/Teacher.js"

const newUser = new User('Marian',  'm@m.com', '2021-01-01')
console.log(newUser.showInfos())