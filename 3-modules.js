 // CommonJS, every file is mudle (by default)
//  module -- info about current module(file)
            //  Encapsulated Code ( only share minimum)

// require utils from '5-utils.js'
// require names from '4-names.js'
// import names from '4-names.js'

//  always use './'   to avoid confliction
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')


console.log(names)
// utils.sayHi(names.john)
sayHi(names.john)

sayHi('susan')
sayHi('peter')
// sayHi('john')

console.log(data)
console.log(data.items)
console.log(data.items[0])
console.log(data.singlePerson)