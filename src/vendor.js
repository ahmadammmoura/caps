const events = require('../events');

events.on(`delivered-to-vendors`,(payload)=>{

  
  const massege = `delivered up ${payload.orderID} at ${payload.time}`;
  const massegedriver = `delivered up ${payload.orderID} at ${payload.time}`;
  
  console.log(`DRIVER:`,massegedriver)
  console.log(`VENDOR:` ,massege);
  
  console.log(`EVENT` ,payload);

})