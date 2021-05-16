const sayHi = (name) =>{
    console.log(`hello there ${name}`)
}  
// export {sayHi}
module.exports =  sayHi  // if just one, don't need {}
// module.export =  {sayHi}