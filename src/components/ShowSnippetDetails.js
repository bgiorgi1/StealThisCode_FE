import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');

class showSnippetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        snippet: {}
    };
  }


  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/api/snippets/'+this.props.match.params.id, {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        console.log("Print-showBookDetails-API-response: ", res.data);
        this.setState({
          snippet: res.data.snippet
        })
      })
      .catch(err => {
        console.log("Error from ShowSnippetDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8000/api/snippets/'+id, {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        this.props.history.push("/ShowSnippet");
      })
      .catch(err => {
        console.log("Error form showSnippetDetails_deleteClick");
      })
  };


  render() {
      console.log(this.props.user)

    const snippet = this.state.snippet;
    let SnippetItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ this.state.snippet.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Code</td>
            <td>{ this.state.snippet.body }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Language</td>
            <td>{ snippet.language && this.state.snippet.language.map(l =><span>{l}{" "}</span>)}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Dependencies</td>
            <td>{ this.state.snippet.dependencies }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Image</td>
            <td>{ this.state.snippet.image }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowSnippetDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/ShowSnippet" className="btn btn-outline-warning float-left">
                  Show Snippet List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Snippets Record</h1>
              <p className="lead text-center">
                  View Snippets Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { SnippetItem }
          </div>

             {this.props.user && this.props.user.id===snippet.userID ? 
             
                <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,snippet._id)}>Delete Snippet</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/UpdateSnippet/${snippet._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Snippet
              </Link>
              <br />
            </div>

          </div>
             
            : null}

      
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showSnippetDetails;