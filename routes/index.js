var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
var airtableTools = require('../tools/airtable-tools');
var marked = require('marked');
var fs = require('fs');
var path = require('path');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('../markdown', 'utf-8', function(err, data){
    console.log(JSON.stringify(data));
    res.render('index', { title: 'Hello from the LL' });
  })
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

router.get('/md/:id', async function (req, res, next) {
  fs.readFile(path.join(ROOT_DIR, 'data/markdown', `${req.params.id}.md`), {encoding: 'utf-8'}, (err, data) => {
    if (err) {res.send("check back in a minute")};
    console.log(data);
    res.render("simple-markdown",  {
      title: `markdown for ${req.params.id}`,
      date: moment().format("YYYYMMDD"),
      convertedMarkdown: marked(data)
    });
  });
});


router.get('/:id', async function (req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/markdown'));
  if (markdownFiles.includes(`${req.params.id}.md`)) {
    fs.readFile(path.join(ROOT_DIR, 'data/markdown', `${req.params.id}.md`), {encoding: 'utf-8'}, (err, data) => {
      if (err) {res.send("check back in a minute")};
      console.log(data);
      res.render("simple-markdown",  {
        title: `markdown for ${req.params.id}`,
        date: moment().format("YYYYMMDD"),
        convertedMarkdown: marked(data)
      });
    });
  } else {
    res.render('test', {title: "test", data: JSON.stringify(markdownFiles, null, 4)});
  }
});

module.exports = router;
