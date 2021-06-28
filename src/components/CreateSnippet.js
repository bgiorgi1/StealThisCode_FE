import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');



class CreateSnippet extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body:'',
      language:'',
      dependencies:'',
      image:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body,
      language: this.state.language,
      dependencies: this.state.dependencies,
      image: this.state.image
    };
console.log(currentUser)
    axios
      .post('http://localhost:8000/api/snippets', data, {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        console.log(res.data)
        this.setState({
          title: '',
          body:'',
          language:'',
          dependencies:'',
          image:'',
        })
        this.props.history.push('/ShowSnippet');
      })
      .catch(err => {
        console.log("Error in CreateSnippet!");
        console.log(err)
      })
  };

  render() {
    return (
      <div className="CreateSnippet">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Snippet List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Code Snippet</h1>
              <p className="lead text-center">
                  Create new snippet
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of code snippet'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter code here'
                    name='body'
                    className='form-control'
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </div>


                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Languages used'
                    name='language'
                    className='form-control'
                    value={this.state.language}
                    onChange={this.onChange}
                  />
                </div>

             
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='dependencies'
                    name='dependencies'
                    className='form-control'
                    value={this.state.dependencies}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateSnippet;