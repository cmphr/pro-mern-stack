const contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

const IssueRow = (props) => (
    <tr>
      <td>{props.issue.id}</td>
      <td>{props.issue.status}</td>
      <td>{props.issue.owner}</td>
      <td>{props.issue.created.toDateString()}</td>
      <td>{props.issue.effort}</td>
      <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
      <td>{props.issue.title}</td>
    </tr>
);

class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date()
    });

    form.owner.value = "";
    form.title.value = "";
  }
  
  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

// step 1: get issues data
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

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => { // simulate an ajax call
      this.setState({ issues: issues });
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

ReactDOM.render(
  <IssueList />, contentNode);
