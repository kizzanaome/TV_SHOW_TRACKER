const db = require("./db")

module.exports ={
    createStrore :() =>{
        
        const users = db.map(user =>{
            return user
        })
        return {users}
    }
}