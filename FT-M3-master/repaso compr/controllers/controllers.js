const changePromiseFunction = require("../utils.js");
const axios = require("axios");
let users = [];

let id = 21;

module.exports = {
  postInitialAllApi: async function () {
    let usersApi = await axios.get(`https://rickandmortyapi.com/api/character`);
    // console.log(usersApi.data.results)
    const allUsers = usersApi.data.results;
    for (let i = 0; i < allUsers.length; i++) {
      const user = {
        id: allUsers[i].id,
        userName: allUsers[i].name,
        tasks: [],
      };
      users.push(user);
    }
  },

  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.
    users = [];
    id = 1;
  },
  getUsers: (...args) => {
    return changePromiseFunction(() => {
      return users;
    }, ...args);
  },
  postUser: (userName) => {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(() => {
          if (typeof userName !== "string") {
            return reject("username debe ser un string");
          }
          const user = {
            id: id++,
            userName,
            tasks: [],
          };
          users.push(user);
          resolve(user);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateUser: (...args) => {
    return changePromiseFunction((id, userName) => {}, ...args);
  },
  deleteUser: ((id) => {
    if (!id) return new Error("faltan datos")
    const user = users.find((u)=>u.id === id)
    if (!user) return new Error("no encontré al usuario")
    users = users.filter((u)=>u.id !== id)
    return users
  }),
  // tareas
  postTask: (description, id) => {
    if (!description || !id) return new Error("faltan datos");
    for (let i = 0; i < users.length; i++) {
        const userTasks = users[i].tasks;
        const tasksAsigned = {
            description,
            complete:false,
            id: !userTasks.length ? 1 : userTasks[userTasks.length] +1
        }
        if(users[i].id === id){
            users[i].tasks.push(tasksAsigned)
            return users[i]
        }
        
    }
    return new Error("el usuario no existe")
  },

  findUserTasks: (...args) => {
    return changePromiseFunction((id, state) => {}, ...args);
  },
  updateTask: (...args) => {
    return changePromiseFunction((id, description, taskId) => {}, ...args);
  },
  deleteTask: (...args) => {
    return changePromiseFunction((id, taskId) => {}, ...args);
  },
  completeTask: (...args) => {
    return changePromiseFunction((id, taskId) => {}, ...args);
  },
};
