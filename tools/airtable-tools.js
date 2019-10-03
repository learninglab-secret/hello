var moment = require('moment');

module.exports.sendToAirtable = async function (record, base, table) {
  console.log("sending this to airtable: ");
  console.log(JSON.stringify(record, null, 4));
  var theRecord = await base(table).create(record)
    .then(data => {
      console.log("saved to AT:" + JSON.stringify(data, null, 4));
      return data
    })
    .catch(err => { return "there was an error:" + err })
  return theRecord;
}

module.exports.addRecord = async function(record, table, base){
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(base);
  var airtableResult = await base(table).create(record).then(result => {
    console.log("saved to airtable");
    return result;
  })
    .catch(err => {
      console.log("\nthere was an error with the AT push\n");
      console.error(err);
      return;
    });
  return airtableResult;
}

module.exports.findOneById = async function(options) {
  var result = await options.base(options.table)
    .find(options.recordId)
    .catch(err=>{console.error(err); return});
  return result;
}

module.exports.findOneByValue = async function(options) {
  theRecords = [];
  await options.base(options.table).select(
    {
      maxRecords: 1,
      view: options.view ? options.view : "Grid view",
      filterByFormula: `${options.field}='${options.value}'`
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  // .then(()=>{
  //   // return(theRecords);
  // })
  .catch(err=>{console.error(err); return})
  return theRecords[0];
}

module.exports.findManyByValue = async function(options) {
  theRecords = [];
  await options.base(options.table).select(
    {
      maxRecords: options.maxRecords,
      view: options.view ? options.view : "Grid view",
      filterByFormula: `${options.field}='${options.value}'`
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  // .then(()=>{
  //   // return(theRecords);
  // })
  .catch(err=>{console.error(err); return})
  return theRecords;
}

module.exports.findManyByFormula = async function(options) {
  theRecords = [];
  await options.base(options.table).select(
    {
      maxRecords: options.maxRecords,
      view: options.view ? options.view : "Grid view",
      filterByFormula: options.formula
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  // .then(()=>{
  //   // return(theRecords);
  // })
  .catch(err=>{console.error(err); return})
  return theRecords;
}


module.exports.findMany = async function(options) {
  theRecords = [];
  await options.base(options.table).select(
    {
      maxRecords: options.maxRecords,
      view: options.view ? options.view : "Grid view",
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  // .then(()=>{
  //   // return(theRecords);
  // })
  .catch(err=>{console.error(err); return})
  return theRecords;
}

module.exports.findManyByFormula = async function(options) {
  theRecords = [];
  await options.base(options.table).select(
    {
      maxRecords: options.maxRecords,
      view: options.view,
      filterByFormula: options.formula
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  // .then(()=>{
  //   // return(theRecords);
  // })
  .catch(err=>{console.error(err); return})
  return theRecords;
}
