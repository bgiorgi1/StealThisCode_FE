import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CodeEditor from "./CodeEditor";
import '../App.css';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');


class CreateSnippet extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body:'',
      language: [],
      languageOptions:[
        {
          id: 0,
          name: 'Javascript',
        },
        {
          id: 1,
          name: 'HTML',
        },
        {
          id: 2,
          name: 'CSS',
        },
        {
          id: 3,
          name: 'React',
        },
        {
          id: 4,
          name: 'Bootstrap',
        },
        {
          id: 5,
          name: 'Material-UI',
        },
        {
        id: 6,
        name: 'Python',
        }
      ],
      selected: [],
      dependencies:'',
      image:'',
    };
  }

  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  onCheckBoxChange(id) {
    let selected = this.state.selected
    let find = selected.indexOf(id)
  
    if(find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
  console.log(find, selected)
    this.setState({ selected })

  }

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body,
      language: this.state.selected.map(id => this.state.languageOptions[id].name),
      dependencies: this.state.dependencies,
      image: this.state.image
    };
console.log('data', data)
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
    console.log(this.state)
    return (
      
      <div className="CreateSnippet">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/ShowSnippet" className="btn btn-outline-warning float-left">
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
                    placeholder='dependencies'
                    name='dependencies'
                    className='form-control'
                    value={this.state.dependencies}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <textarea
                    rows="4" cols="50"
                    type='text'
                    placeholder='Enter code here'
                    name='body'
                    className='form-control'
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </div>


          <div>
{/* This is mapping through list of languages above */}
          {
        this.state.languageOptions.map(item => {
       return (
        <label key={ item.id }>
          <input type="checkbox" 
           onChange={ () => this.onCheckBoxChange(item.id) }
          selected={ this.state.selected.includes(item.id) }
          >  
          </input>
          <span>{ item.name }</span>
        </label>
         )
        })
        }
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