var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
var airtableTools = require('../tools/airtable-tools');
var marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello from the LL' });
});

router.get('/airtable/:id', async function(req, res, next) {
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_TOOLS_BASE);
  var records = await airtableTools.findManyByValue({
    maxRecords: 50,
    field: "Audience",
    value: req.params.id,
    table: "Hellos",
    base: base
  });
  res.render('test', { title: "test", data: JSON.stringify(records, null, 4)});
});

router.get('/markdown/:id', async function (req, res, next) {
  res.render('simple-markdown', convertedMarkdown: )
});


module.exports = router;
