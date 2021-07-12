'use strict';

const events = require('../events');


events.on(`delivered`,(payload)=>{

  payload.time = new Date().toISOString()
  const massege = `delivered up ${payload.orderID} at ${payload.time}`;

  

  events.emit(`delivered-to-vendors`,payload)

})

events.on('in-transit',payload=>{

  payload.time = new Date().toISOString()

  console.log(`EVENT: in transit`,payload)


  setTimeout(()=>{
    
    events.emit('delivered',payload)
    
  },3000)

})


events.on('pick-up',payload=>{

  payload.time = new Date().toISOString()

  const message = `picked up ${payload.orderID} at ${payload.time}`

  
    console.log(`DRIVER:${message}`)

    setTimeout(()=>{
      events.emit(`in-transit`,payload)
    },3000)
    
  

})