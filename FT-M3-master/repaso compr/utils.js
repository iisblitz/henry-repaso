module.exports =  function ( func, ...args){
  return new Promise((resolve, reject)=>{
    try {
      resolve(func(...args))
    } catch (error) {
      reject(error)
    }
  })
}