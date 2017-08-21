const contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

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
  render() {
    return (
      <div>This is a placeholder for an issue add form.</div>
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
    // step 2: initialize the issues state with the initial data
    this.state = { issues: issues };
    setTimeout(this.createTestIssue.bind(this), 2000);

    // this.createTestIssue = this.createTestIssue.bind(this);
    // setTimeout(this.createTestIssue, 2000);

    // setTimeout(() => {this.createTestIssue()}, 2000);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  createTestIssue() {
    this.createIssue({
      status: 'New',
      owner: 'Jilly',
      created: new Date(),
      title: 'Completion date should be optional'
    });
  }
  
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        {/* step 3: pass the issues in state to the table via props */}
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd />
      </div>
    );
  }
}

ReactDOM.render(
  <IssueList />, contentNode);
