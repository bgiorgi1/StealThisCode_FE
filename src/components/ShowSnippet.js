import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SnippetCard from './SnippetCard';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');

class ShowSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        snippet: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/snippets', {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        this.setState({
            snippet: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowSnippet');
      })
  };


  render() {
    const snippets = this.state.snippets;
    console.log("PrintSnippet: " + snippets);
    let SnippetList;

    if(!snippets) {
        SnippetList = "there is no snippets record!";
    } else {
        SnippetList = snippets.map((snippet, k) =>
        <SnippetCard snippet={snippet} key={k} />
      );
    }

    return (
      <div className="ShowSnippetList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Snippet List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/CreateSnippet" className="btn btn-outline-warning float-right">
                + Add New Snippet
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {SnippetList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSnippet;