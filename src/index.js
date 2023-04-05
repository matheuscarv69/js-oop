import User from "./domain/User.js"
import Admin from "./domain/Admin.js"
import Teacher from "./domain/Teacher.js"

const newAdmin = new Admin('Marian',  'm@m.com', '2021-01-01')
console.log(newAdmin.showInfos())
console.log(newAdmin.name)
