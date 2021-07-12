'use strict';

const events = require('./events');
const faker = require('faker');
require('dotenv').config();
require('./src/driver');
require('./src/vendor');


events.on('pick',(payload)=>{
  
  const obj ={
    event: 'pick',
    time: new Date().toISOString(),
    payload
  }

  console.log(`EVENT`,obj)

  events.emit('pick-up',obj.payload)

})


  const payload = { 
  
  store: process.env.STORENAME,
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetName()
 }

 function test(data){
  events.emit('pick',data)
 }

// console.log(test())

 module.exports = test

// just for the pull

