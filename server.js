const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json({type: ['application/json', 'text/x-json']}));

const issues = [
  {
    id: 1,
    status: 'Open',
    owner: 'Jim',
    created: new Date('2017-08-02'),
    effort: 5,
    completionDate: undefined,
    title: 'Error in console when clicking Add'
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Jen',
    created: new Date('2017-08-01'),
    effort: 14,
    completionDate: new Date('2017-08-12'),
    title: 'Missing bottom border on panel'
  }
];

app.get('/api/issues', (req, res) => { // list issues
  const metadata = {
    total_count: issues.length
  };

  res.json({
    _metadata: metadata,
    records: issues
  });
});

app.post('/api/issues', (req, res) => { // create issue
  const newIssue = req.body;
  newIssue.id = issues.length + 1;
  newIssue.created = new Date();
  if (!newIssue.status) {
    newIssue.status = 'New';
  }
  issues.push(newIssue);
  res.json(newIssue);
});

app.listen(3000, function() {
  console.log('App started on port 3000');
});