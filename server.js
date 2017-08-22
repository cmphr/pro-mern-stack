const express = require('express');

const app = express();
app.use(express.static('static'));

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

app.get('/api/issues', (req, res) => {
  const metadata = {
    total_count: issues.length
  };
  res.json({
    _metadata: metadata,
    records: issues
  });
});

app.listen(3000, function() {
  console.log('App started on port 3000');
});