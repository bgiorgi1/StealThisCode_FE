import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');

class UpdateSnippetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      language: '',
      dependencies: '',
      image: ''
    };
  }

  componentDidMount() {
    //this is displaying the information
    console.log("Print id: " , this.props.match.params.id);
    axios
      .get('http://localhost:8000/api/snippets/'+this.props.match.params.id , {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        // this.setState({...this.state, book: res.data})
        console.log("Print-updateSnippet-API-response: ", res.data);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          language: res.data.language,
          dependencies: res.data.dependencies,
          image: res.data.image
        })
      })
      .catch(err => {
        console.log("Error from UpdateSnippetInfo");
      })
  };

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
console.log(data)
    //this is updating the information
    axios
      .put('http://localhost:8000/api/snippets/'+this.props.match.params.id, data, {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        console.log("Print-updateSnippet-API-response: ", res.data);
        this.props.history.push('/ShowSnippet/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateSnippetInfo!");
      })
      // return<Redirect to='/ShowSnippetDetails'/>
  };



  render() {
    return (
      <div className="UpdateSnippetInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/ShowSnippet" className="btn btn-outline-warning float-left">
                  Show Snippet List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Snippet</h1>
              <p className="lead text-center">
                  Update Snippet's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="body">Code</label>
              <input
                type='text'
                placeholder='Code'
                name='body'
                className='form-control'
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="language">Languages Used</label>
              <input
                type='text'
                placeholder='language'
                name='language'
                className='form-control'
                value={this.state.language}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="dependencies">dependencies</label>
              <input
                type='text'
                placeholder='dependencies'
                name='dependencies'
                className='form-control'
                value={this.state.dependencies}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="image">image</label>
              <input
                type='text'
                placeholder='image of this code'
                name='image'
                className='form-control'
                value={this.state.image}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Snippet</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateSnippetInfo;